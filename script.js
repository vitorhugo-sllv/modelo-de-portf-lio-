/**
 * portfolio — navegação entre páginas
 * Alterna entre #view-home (currículo) e #view-about (sobre).
 */

/**
 * Exibe a view com o ID indicado e oculta as demais.
 * @param {string} id - ID do elemento .view a ser exibido
 */
function showView(id) {
  // Oculta todas as views
  document.querySelectorAll('.view').forEach(function (v) {
    v.classList.remove('active');
  });

  // Exibe a view alvo
  var target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
