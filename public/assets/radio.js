document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(`${window.VITE_API_URL}/api/stations?type=radio`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const stations = await response.json();
    if (typeof renderRadioStations === 'function') {
      renderRadioStations(stations);
    }
  } catch (error) {
    console.error('Error loading radio stations:', error);
    alert('Failed to load radio stations. Please try again later.');
  }
  document.getElementById('radio-back-button').addEventListener('click', () => {
    document.getElementById('radio-player-container').classList.add('hidden');
    document.getElementById('radio-grid').classList.remove('hidden');
    document.getElementById('radio-player').pause();
  });
});

function openRadioPlayer(station) {
  document.getElementById('radio-grid').classList.add('hidden');
  document.getElementById('radio-player-container').classList.remove('hidden');
  document.getElementById('radio-station-name').textContent = station.name;
  document.getElementById('radio-station-logo').src = station.logo_url;
  const audioPlayer = document.getElementById('radio-player');
  audioPlayer.src = station.stream_url;
  audioPlayer.autoplay = true;
  audioPlayer.controls = true;
}