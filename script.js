document.addEventListener("DOMContentLoaded", async () => {
    const widgetContainer = document.getElementById("custom-discord-widget");
  
    try {
      // Fetch data from Discord API
      const response = await fetch("https://discord.com/api/guilds/1092276017432887409/widget.json");
      const data = await response.json();
  
      // Extract relevant data
      const serverName = data.name;
      const serverIcon = data.instant_invite ? `https://cdn.discordapp.com/icons/${data.id}/${data.icon}.png` : null;
      const memberCount = data.presence_count;
  
      // Update widget content
      widgetContainer.innerHTML = `
        <h2>Join Our Discord</h2>
        <div class="server-info">
          ${serverIcon ? `<img src="${serverIcon}" alt="Server Icon">` : ""}
          <div>
            <p class="server-name">${serverName}</p>
            <p class="member-count">Active Members: ${memberCount}</p>
          </div>
        </div>
        <a href="${data.instant_invite}" target="_blank" class="join-button">Join Now</a>
      `;
    } catch (error) {
      console.error("Error fetching Discord widget data:", error);
      widgetContainer.innerHTML = `<p>Failed to load Discord widget. Please try again later.</p>`;
    }
  });
  