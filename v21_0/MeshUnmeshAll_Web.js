if (typeof MeshUnmeshAll == 'undefined')
{
    MeshUnmeshAll = {};
}

/*** web/UI code - runs natively in the plugin process ***/

// initialize the UI
MeshUnmeshAll.initializeUI = function()
{
    // create an overall container for all objects that comprise the "content" of the plugin
    // everything except the footer
    const contentContainer = document.createElement('div');
    contentContainer.id = 'contentContainer';
    contentContainer.className = 'contentContainer'
    window.document.body.appendChild(contentContainer);

    /* mesh all */

    // create the header
    contentContainer.appendChild(new FormIt.PluginUI.HeaderModule('Mesh All Selected', '', 'headerContainer').element);

    // unordered lists as necessary
    const meshAllDetailsUl1 = contentContainer.appendChild(document.createElement('ul'));
    const meshAllDetailsLi1a = meshAllDetailsUl1.appendChild(document.createElement('li'));
    meshAllDetailsLi1a.innerHTML = 'Select Group instances and/or Objects.';

    const meshAllDetailsLi1b = meshAllDetailsUl1.appendChild(document.createElement('li'));
    meshAllDetailsLi1b.innerHTML = 'Click the button below to convert all nested Objects in the selection into Meshes.';

    // create the mesh all button
    const meshAllButton = new FormIt.PluginUI.Button('Mesh All Selected', MeshUnmeshAll.submitMeshAll);
    contentContainer.appendChild(meshAllButton.element);
    meshAllButton.element.style.marginTop = '20px';
    meshAllButton.element.style.marginBottom = '35px';

    /* unmesh all */

    // create the header
    contentContainer.appendChild(new FormIt.PluginUI.HeaderModule('Unmesh All Selected', '', 'headerContainer').element);

    // unordered lists as necessary
    const unmeshAllDetailsUl1 = contentContainer.appendChild(document.createElement('ul'));
    const unmeshAllDetailsLi1a = unmeshAllDetailsUl1.appendChild(document.createElement('li'));
    unmeshAllDetailsLi1a.innerHTML = 'Select Group instances and/or Meshes.';

    const unmeshAllDetailsLi1b = unmeshAllDetailsUl1.appendChild(document.createElement('li'));
    unmeshAllDetailsLi1b.innerHTML = 'Click the button below to convert all nested Meshes in the selection into Objects.';

    // create the unmesh all button
    const unmeshAllButton = new FormIt.PluginUI.Button('Unmesh All Selected', MeshUnmeshAll.submitUnmeshAll);
    contentContainer.appendChild(unmeshAllButton.element);
    unmeshAllButton.element.style.marginTop = '20px';
    unmeshAllButton.element.style.marginBottom = '35px';

    // create the footer
    document.body.appendChild(new FormIt.PluginUI.FooterModule().element);
}

// use CallMethod to execute the client-side function from the plugin
MeshUnmeshAll.submitMeshAll = function()
{
    window.FormItInterface.CallMethod("MeshUnmeshAll.meshAll", {});
}

// use CallMethod to execute the client-side function from the plugin
MeshUnmeshAll.submitUnmeshAll = function()
{
    window.FormItInterface.CallMethod("MeshUnmeshAll.unmeshAll", {});
}