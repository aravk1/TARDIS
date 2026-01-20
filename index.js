/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var currentScene = null;
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function() {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene, entryYaw, entryPitch) {
    stopAutorotate();

    var params = Object.assign({}, scene.data.initialViewParameters);

    if (entryYaw !== undefined) params.yaw = entryYaw;
    if (entryPitch !== undefined) params.pitch = entryPitch;

    scene.view.setParameters(params);
    scene.scene.switchTo();
    currentScene = scene;

    window.TARDIS_SCENE = {
      id: scene.data.id,
      name: scene.data.name,
      context: scene.data.context || null,
      yaw: scene.view.yaw ? scene.view.yaw() : null,
      pitch: scene.view.pitch ? scene.view.pitch() : null,
      fov: scene.view.fov ? scene.view.fov() : null
    };

    //startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }

  // ===== HASH-BASED NAVIGATION =====
  // Allow linking directly to scenes via URL hash (e.g., tour.html#35-barn-outside)

  function loadSceneFromHash() {
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash) {
      const scene = findSceneById(hash);
      if (scene) {
        switchScene(scene);
      } else {
        console.warn('Scene not found:', hash);
      }
    }
  }

  // Load scene from hash on page load
  window.addEventListener('load', () => {
    setTimeout(loadSceneFromHash, 100); // Small delay to ensure scenes are initialized
  });

  // Handle hash changes (browser back/forward)
  window.addEventListener('hashchange', loadSceneFromHash);

// ====================================================

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }
    wrapper.addEventListener('click', function() {
      window.__pendingTransition = { from: currentScene.data.id, to: hotspot.target };

      var yaw = hotspot.entryView ? hotspot.entryView.yaw : hotspot.entryYaw;
      var pitch = hotspot.entryView ? hotspot.entryView.pitch : hotspot.entryPitch;

      switchScene(findSceneById(hotspot.target), yaw, pitch);
    });
    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

function openImageOverlay(imageSrc, title) {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.95); z-index:10001; display:flex; align-items:center; justify-content:center;';
  
  var img = document.createElement('img');
  img.src = imageSrc;
  img.style.cssText = 'max-width:90vw; max-height:90vh; object-fit:contain;';
  
  var rotationState = 0;
  
  // Auto-detect and rotate portrait images
  img.onload = function() {
    if (img.naturalHeight > img.naturalWidth) {
      // Portrait - rotate 90° to landscape
      rotationState = 90;
      img.style.transform = 'rotate(90deg)';
    }
  };
  
  // Rotate button
  var rotateBtn = document.createElement('button');
  rotateBtn.textContent = '↻';
  rotateBtn.style.cssText = 'position:fixed; top:20px; right:80px; width:50px; height:50px; border-radius:50%; background:white; border:none; cursor:pointer; font-size:24px;';
  rotateBtn.onclick = function() {
    rotationState = (rotationState + 90) % 360;
    img.style.transform = 'rotate(' + rotationState + 'deg)';
  };
  
  // Close button
  var closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.style.cssText = 'position:fixed; top:20px; right:20px; width:50px; height:50px; border-radius:50%; background:white; border:none; cursor:pointer; font-size:32px;';
  closeBtn.onclick = function() {
    document.body.removeChild(overlay);
  };
  
  overlay.onclick = function(e) {
    if (e.target === overlay) document.body.removeChild(overlay);
  };
  
  overlay.appendChild(img);
  overlay.appendChild(rotateBtn);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);
}

function createInfoHotspotElement(hotspot) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('hotspot', 'info-hotspot');

  var header = document.createElement('div');
  header.classList.add('info-hotspot-header');

  var iconWrapper = document.createElement('div');
  iconWrapper.classList.add('info-hotspot-icon-wrapper');
  var icon = document.createElement('img');
  icon.src = 'img/info.png';
  icon.classList.add('info-hotspot-icon');
  iconWrapper.appendChild(icon);

  var titleWrapper = document.createElement('div');
  titleWrapper.classList.add('info-hotspot-title-wrapper');
  var title = document.createElement('div');
  title.classList.add('info-hotspot-title');
  title.innerHTML = hotspot.title || '';
  titleWrapper.appendChild(title);

  var closeWrapper = document.createElement('div');
  closeWrapper.classList.add('info-hotspot-close-wrapper');
  var closeIcon = document.createElement('img');
  closeIcon.src = 'img/close.png';
  closeIcon.classList.add('info-hotspot-close-icon');
  closeWrapper.appendChild(closeIcon);

  header.appendChild(iconWrapper);
  header.appendChild(titleWrapper);
  header.appendChild(closeWrapper);

  var text = document.createElement('div');
  text.classList.add('info-hotspot-text');
  text.innerHTML = hotspot.text || '';

  wrapper.appendChild(header);
  wrapper.appendChild(text);

  stopTouchAndScrollEventPropagation(wrapper);

  var modal = document.getElementById('infoModal');
  var modalTitle = document.getElementById('infoModalTitle');
  var modalBody = document.getElementById('infoModalBody');
  var modalClose = document.getElementById('infoModalClose');
  
  if (modalClose) {
    modalClose.onclick = function(e) {
      e.stopPropagation();
      modal.classList.remove('visible');
    };
  }

  if (modal) {
    modal.onclick = function(e) {
      if (e.target === modal) modal.classList.remove('visible');
    };
  }

  wrapper.querySelector('.info-hotspot-header').addEventListener('click', function(e) {
    e.stopPropagation();

    modalTitle.innerText = hotspot.title || '';
    modalBody.innerHTML = '';

    if (hotspot.photo) {
      // Image container
      var imageContainer = document.createElement('div');
      imageContainer.className = 'modal-image-container';
      
      // CREATE the image element
      var img = document.createElement('img');
      img.src = hotspot.photo;
      img.alt = hotspot.title || '';
      img.style.cursor = 'pointer';
      
      // Click image to open fullscreen overlay (we'll add this function next)
      img.onclick = function() {
        openImageOverlay(hotspot.photo, hotspot.title);
      };
      
      imageContainer.appendChild(img);
      modalBody.appendChild(imageContainer);
    }

    if (hotspot.text) {
      var textContainer = document.createElement('div');
      textContainer.className = 'modal-text-container';
      var textDiv = document.createElement('div');
      textDiv.className = 'info-text';
      textDiv.innerHTML = hotspot.text;
      textContainer.appendChild(textDiv);
      modalBody.appendChild(textContainer);
    }

    modal.classList.add('visible');
  });

  return wrapper;
}

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.
  //switchScene(findSceneById("23-house-outside") || scenes[0]);
  
  function savePendingEntry() {
    if (!window.__pendingTransition) {
      console.warn("No pending transition to save.");
      return;
    }

    var fromId = window.__pendingTransition.from;
    var toId = window.__pendingTransition.to;

    if (!currentScene || currentScene.data.id !== toId) {
      console.warn("You must be in the target scene to save its entry view.");
      return;
    }

    var yaw = currentScene.view.yaw();
    var pitch = currentScene.view.pitch();

    // find the source scene object and the correct hotspot
    var fromScene = findSceneById(fromId);
    if (!fromScene) return;

    var hs = (fromScene.data.linkHotspots || []).find(h => h.target === toId);
    if (!hs) {
      console.warn("Could not find hotspot in", fromId, "that targets", toId);
      return;
    }

    // update the hotspot in data
    hs.entryYaw = yaw;
    hs.entryPitch = pitch;

    // log it
    if (window.__recordEntryView) {
      window.__recordEntryView(fromId, toId, yaw, pitch);
    }

    console.log("Saved entry for", fromId, "->", toId, "yaw", yaw, "pitch", pitch);
  }

  // ===== DEBUG ENTRY VIEW LOGGER =====
  (function () {

    function getQueryFlag(name) {
      var q = window.location.search || "";
      return new RegExp("[?&]" + name + "=1(?:&|$)").test(q);
    }

    var DEBUG_ENTRY = getQueryFlag("debug") || localStorage.getItem("DEBUG_ENTRY") === "1";
    var entryLog = [];

    function fmt(n) {
      return (typeof n === "number" && isFinite(n)) ? n.toFixed(6) : "null";
    }

    function buildUI() {
      if (!DEBUG_ENTRY) return;

      var panel = document.createElement("div");
      panel.id = "debugEntryPanel";
      panel.style.cssText =
        "position:fixed; right:12px; bottom:12px; z-index:99999;" +
        "background:rgba(0,0,0,0.75); color:#fff; padding:10px 12px;" +
        "font:12px/1.35 system-ui, Arial; border-radius:10px; width:260px;";

      panel.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="font-weight:700;">Debug: Entry Recorder</div>
          <button id="dbgToggle" style="border:0; border-radius:8px; padding:4px 8px;">On</button>
        </div>
        <div style="margin-top:8px;">
          <div><b>Scene:</b> <span id="dbgScene">-</span></div>
          <div><b>Yaw:</b> <span id="dbgYaw">-</span></div>
          <div><b>Pitch:</b> <span id="dbgPitch">-</span></div>
          <div><b>FOV:</b> <span id="dbgFov">-</span></div>
          <div><b>Saved:</b> <span id="dbgCount">0</span></div>
        </div>
        <div style="display:flex; gap:8px; margin-top:10px;">
          <button id="dbgDownload" style="flex:1;">Download</button>
          <button id="dbgCopy" style="flex:1;">Copy</button>
        </div>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <button id="dbgClear" style="flex:1;">Clear</button>
        </div>
        <div id="dbgMsg" style="margin-top:6px;"></div>
        <button id="dbgSave" style="flex:1;">Save Entry</button>
      `;
      document.body.appendChild(panel);

      document.getElementById("dbgToggle").onclick = function () {
        DEBUG_ENTRY = !DEBUG_ENTRY;
        localStorage.setItem("DEBUG_ENTRY", DEBUG_ENTRY ? "1" : "0");
        this.textContent = DEBUG_ENTRY ? "On" : "Off";
      };

      document.getElementById("dbgClear").onclick = function () {
        entryLog = [];
        updateUI("Cleared log.");
      };

      document.getElementById("dbgDownload").onclick = function () {
        var text = entryLog.map(e => JSON.stringify(e)).join("\n") + "\n";
        var blob = new Blob([text], { type: "text/plain" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "entry_views.jsonl";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        updateUI("Downloaded file.");
      };

      document.getElementById("dbgCopy").onclick = async function () {
        try {
          var text = entryLog.map(e => JSON.stringify(e)).join("\n") + "\n";
          await navigator.clipboard.writeText(text);
          updateUI("Copied to clipboard.");
        } catch {
          updateUI("Clipboard failed. Use Download.");
        }
      };

      document.getElementById("dbgSave").onclick = savePendingEntry;

      function updateUI(msg) {
        if (!currentScene) return;
        var view = currentScene.view;
        document.getElementById("dbgScene").textContent = currentScene.data.id;
        document.getElementById("dbgYaw").textContent = fmt(view.yaw());
        document.getElementById("dbgPitch").textContent = fmt(view.pitch());
        document.getElementById("dbgFov").textContent = fmt(view.fov());
        document.getElementById("dbgCount").textContent = entryLog.length;
        if (msg) document.getElementById("dbgMsg").textContent = msg;
      }

      window.__updateDebugEntryUI = updateUI;

      (function loop() {
        updateUI();
        requestAnimationFrame(loop);
      })();
    }

    buildUI();

    // Expose a helper so hotspot clicks can log entry views
    window.__recordEntryView = function (from, to, yaw, pitch) {
      if (!DEBUG_ENTRY) return;
      entryLog.push({
        from: from,
        to: to,
        entryView: { yaw: yaw, pitch: pitch },
        ts: Date.now()
      });
      if (window.__updateDebugEntryUI) window.__updateDebugEntryUI("Saved: " + from + " → " + to);
    };

  })();
})();
