// tiny helper to mount interactive pages that call `mount(el)` from their own script

window.pageMount = function(mountFn){

  document.addEventListener('DOMContentLoaded', ()=>{

    const root = document.querySelector('#main') || document.body;

    try{ if(typeof mountFn === 'function') mountFn(root) } catch(e){ console.error(e) }

  })

}
