var id_ = localStorage.getItem('log-in');
var inicializate = localStorage.getItem('inicializate');

if(inicializate === "stable" && id_.length >= 1) localStorage.setItem("redir", true);
else localStorage.setItem("redir", false);