// Sidebar compartilhado - injetado em todas as páginas
(function () {
    const navItems = [
        { href: 'index.html', icon: '🏠', label: 'Início' },
        { href: 'perfil.html', icon: '👤', label: 'Perfil' },
        { href: 'diagnostico.html', icon: '🔍', label: 'Diagnóstico' },
        { href: 'contexto.html', icon: '🌐', label: 'Contexto' },
        { href: 'hipoteses.html', icon: '💡', label: 'Hipóteses' },
        { href: 'experimentacao.html', icon: '🧪', label: 'Experimentação' },
        { href: 'evidencias.html', icon: '📊', label: 'Evidências' },
        { href: 'projetos.html', icon: '🛠️', label: 'Projetos' },
        { href: 'planejamento.html', icon: '📅', label: 'Planejamento' },
        { href: 'sintese.html', icon: '✨', label: 'Síntese' },
    ];

    const current = window.location.pathname.split('/').pop() || 'index.html';

    const navHTML = navItems.map(({ href, icon, label }) => {
        const active = (current === href || (current === '' && href === 'index.html')) ? ' active' : '';
        return `<li><a href="${href}" class="nav-link${active}">
        <span style="font-size:1rem;flex-shrink:0;width:20px;text-align:center;line-height:1">${icon}</span>
        <span>${label}</span>
        </a></li>`;
    }).join('');

    document.getElementById('sidebar').innerHTML = `
    <div class="sidebar-header">
      <img src="info/foto.jpg" alt="Foto de perfil" class="avatar" id="nav-foto"
        onerror="this.src='https://ui-avatars.com/api/?name=SEU+NOME&background=1e6fa6&color=fff&size=80'" />
      <h2 class="nav-nome" id="nav-nome">Seu Nome</h2>
      <p class="nav-curso" id="nav-curso">Portfólio de Carreira</p>
    </div>
    <nav><ul class="nav-list">${navHTML}</ul></nav>
  `;

    // Mobile hamburger
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    function openSidebar() { sidebar.classList.add('open'); overlay.classList.add('active'); }
    function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('active'); }

    hamburger.addEventListener('click', () =>
        sidebar.classList.contains('open') ? closeSidebar() : openSidebar()
    );
    overlay.addEventListener('click', closeSidebar);
})();