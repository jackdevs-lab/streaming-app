document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(`${window.API_URL}/api/stations?type=tv`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const stations = await response.json();
    if (typeof renderTVStations === 'function') {
      renderTVStations(stations);
    }
  } catch (error) {
    console.error('Error loading TV stations:', error);
    alert('Failed to load TV stations. Please try again later.');
  }
  document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('player-container').classList.add('hidden');
    document.getElementById('tv-grid').classList.remove('hidden');
    document.getElementById('tv-player').src = '';
  });
});

function openTVPlayer(station) {
  document.getElementById('tv-grid').classList.add('hidden');
  document.getElementById('player-container').classList.remove('hidden');
  document.getElementById('station-name').textContent = station.name;
  const iframe = document.getElementById('tv-player');
  const streamUrl = `${station.stream_url}?autoplay=1&controls=1&modestbranding=1&rel=0`;
  iframe.src = streamUrl;
}