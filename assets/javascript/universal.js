// Update this manually before committing changes to github
const SITE_LAST_UPDATED = "February 4, 2026";
const SITE_NAME = "wiki_name";
document.addEventListener("DOMContentLoaded", () => {
	const el = document.getElementById("site-last-updated");
	if (!el) return;
	
	el.textContent = SITE_LAST_UPDATED;
});