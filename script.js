document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-button');
  const panels = document.querySelectorAll('.content-panel');
  const indicator = document.querySelector('.tab-indicator');

  function initIndicator() {
    const activeTab = document.querySelector('.tab-button.active');
    if (activeTab && indicator) {
      indicator.style.width = activeTab.offsetWidth + 'px';
      indicator.style.transform = 'translateX(' + activeTab.offsetLeft + 'px)';
    }
  }

  initIndicator();
  window.addEventListener('resize', initIndicator);

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetId = this.dataset.tab + '-panel';

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      if (indicator) {
        indicator.style.transform = 'translateX(' + this.offsetLeft + 'px)';
        indicator.style.width = this.offsetWidth + 'px';
      }

      panels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
});