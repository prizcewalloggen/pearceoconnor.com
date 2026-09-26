import"./hoisted.CwxOAP7I.js";let i=[],s="all";async function c(){try{const e=await fetch("https://api.github.com/users/prizcewalloggen/repos?sort=updated&per_page=23");if(!e.ok)throw new Error(`GitHub API Error: ${e.statusText}`);const a=await e.json();if(!Array.isArray(a))throw new Error("Invalid response format from GitHub API");i=a.filter(t=>!t.fork),r()}catch(e){console.error("Failed to fetch projects:",e);const a=document.getElementById("projectsContainer");a&&(a.innerHTML=`
					<div class="no-projects">
						<p>Unable to load projects. <br> <span style="font-size: 0.8em; opacity: 0.7;">${e.message}</span></p>
					</div>
				`)}}function r(){const e=document.getElementById("projectsContainer");if(!e)return;let a=i;if(s!=="all"&&(a=i.filter(t=>t.language===s)),a.length===0){e.innerHTML=`
				<div class="no-projects">
					<p>No projects found for this filter.</p>
				</div>
			`;return}e.innerHTML=a.map(t=>`
			<div class="project-card">
				<div class="project-header">
					<div>
						<h2 class="project-title">${t.name}</h2>
						${t.language?`<span class="language-tag">${t.language}</span>`:""}
					</div>
				</div>
				<p class="project-description">
					${t.description||"No description available"}
				</p>
				<div class="project-meta">
					${t.stargazers_count>0?`
						<div class="meta-item">
							<i data-lucide="star"></i>
							<span>${t.stargazers_count}</span>
						</div>
					`:""}
					${t.forks_count>0?`
						<div class="meta-item">
							<i data-lucide="git-fork"></i>
							<span>${t.forks_count}</span>
						</div>
					`:""}
					<div class="meta-item">
						<i data-lucide="calendar"></i>
						<span>Updated ${new Date(t.updated_at).toLocaleDateString()}</span>
					</div>
					${t.license?`
						<div class="meta-item">
							<i data-lucide="file-text"></i>
							<span>${t.license.name}</span>
						</div>
					`:""}
				</div>
				<div class="project-links">
					<a href="${t.html_url}" target="_blank" class="project-link">
						<i data-lucide="github"></i>
						<span>View on GitHub</span>
					</a>
					${t.homepage?`
						<a href="${t.homepage}" target="_blank" class="project-link">
							<i data-lucide="external-link"></i>
							<span>Live Demo</span>
						</a>
					`:""}
				</div>
			</div>
		`).join(""),typeof lucide<"u"&&lucide.createIcons()}const n=document.getElementById("filterTabs");n&&n.addEventListener("click",e=>{e.target.classList.contains("filter-tab")&&(document.querySelectorAll(".filter-tab").forEach(a=>a.classList.remove("active")),e.target.classList.add("active"),s=e.target.dataset.filter,r())});c();
