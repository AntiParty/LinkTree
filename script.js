async function updateStats() {
  try {
      const response = await fetch('./stats.json');
      const data = await response.json();

      // Extract the necessary statistics
      const subscriberCount = data.items[0].statistics.subscriberCount;
      const viewCount = data.items[0].statistics.viewCount;

      // Update the HTML with the data
      document.querySelector('.stats').innerHTML = `
          ${viewCount} <span class="testing-red"><i class="fab fa-youtube"></i> YouTube</span><br />
          ${subscriberCount} <span class="testing-blue"><i class="fa-brands fa-tiktok"></i> TikTok</span><br />
          Business Inquiries: <a href="mailto:antiparty99@gmail.com" class="email-link">antiparty99@gmail.com</a>
      `;
  } catch (error) {
      console.error('Error fetching stats:', error);
  }
}

window.onload = updateStats;
