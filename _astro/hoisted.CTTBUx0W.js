import"./hoisted.CwxOAP7I.js";let i=[],o="all";async function n(){try{const e=await fetch("https://api.github.com/users/prizcewalloggen/repos?sort=updated&per_page=3");if(!e.ok)throw new Error(`GitHub API Error: ${e.statusText}`);const t=await e.json();if(!Array.isArray(t))throw new Error("Invalid response format");i=t.filter(r=>!r.fork),a()}catch(e){console.error("Failed to fetch projects:",e);const t=document.getElementById("projectsContainer");t&&(t.innerHTML=`
					<div class="no-projects">
						<p>Unable to load. <br> <span style="font-size: 0.8em; opacity: 0.7;">${e.message}</span></p>
					</div>
				`)}}function a(){const e=document.getElementById("projectsContainer");if(!e)return;let t=i;if(o!=="all"&&(t=i.filter(r=>r.language===o)),t.length===0){e.innerHTML=`
				<div class="no-projects">
					<p>No projects found.</p>
				</div>
			`;return}e.innerHTML=t.map(r=>`
			<div class="project-card" style="padding: 1rem; margin-bottom: 1rem;">
				<div class="project-header" style="margin-bottom: 0.5rem;">
					<div>
						<h3 class="project-title" style="font-size: 1.1rem; margin: 0;">${r.name}</h3>
					</div>
				</div>
				<p class="project-description" style="font-size: 0.9rem; margin-bottom: 0.5rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
					${r.description||"No description available"}
				</p>
				<div class="project-links">
					<a href="${r.html_url}" target="_blank" class="project-link" style="font-size: 0.8rem; padding: 0.25rem 0.5rem;">
						GitHub
					</a>
				</div>
			</div>
		`).join(""),typeof lucide<"u"&&lucide.createIcons()}const s=document.getElementById("filterTabs");s&&s.addEventListener("click",e=>{e.target.classList.contains("filter-tab")&&(document.querySelectorAll(".filter-tab").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),o=e.target.dataset.filter,a())});n();
