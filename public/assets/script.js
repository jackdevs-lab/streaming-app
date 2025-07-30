function renderTVStations(stations) {
  const grid = document.getElementById('tv-grid');
  grid.innerHTML = '';
  
  stations.forEach((station, index) => {
    const card = document.createElement('div');
    card.className = `channel-card rounded-2xl p-6 cursor-pointer fade-in stagger-delay-${(index % 6) + 1}`;
    card.onclick = () => openTVPlayer(station);
    
    const gradients = {
      news: 'from-blue-600 to-purple-700',
      sports: 'from-emerald-600 to-teal-700',
      movies: 'from-rose-600 to-pink-700',
      documentary: 'from-amber-600 to-orange-700',
      music: 'from-indigo-600 to-violet-700',
      default: 'from-slate-600 to-gray-700'
    };
    const gradientClass = gradients[station.description?.toLowerCase().includes('news') ? 'news' :
      station.description?.toLowerCase().includes('sports') ? 'sports' :
      station.description?.toLowerCase().includes('movies') ? 'movies' :
      station.description?.toLowerCase().includes('documentary') ? 'documentary' :
      station.description?.toLowerCase().includes('music') ? 'music' : 'default'];

    card.innerHTML = `
      <div class="aspect-video bg-gradient-to-br ${gradientClass} rounded-xl mb-4 flex items-center justify-center">
        <img src="${station.logo_url}" alt="${station.name}" class="w-full h-full object-contain object-center">
      </div>
      <h3 class="text-xl font-semibold mb-2">${station.name}</h3>
      <p class="text-gray-400 text-sm font-light">${station.description || 'Live streaming'}</p>
      <div class="mt-4 flex items-center text-${
        gradientClass.includes('blue') ? 'purple' :
        gradientClass.includes('emerald') ? 'emerald' :
        gradientClass.includes('rose') ? 'rose' :
        gradientClass.includes('amber') ? 'amber' :
        gradientClass.includes('indigo') ? 'indigo' : 'slate'
      }-300 text-sm">
        <div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
        <span>Live</span>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function renderRadioStations(stations) {
  const grid = document.getElementById('radio-grid');
  grid.innerHTML = '';
  
  stations.forEach((station, index) => {
    const card = document.createElement('div');
    card.className = `station-card rounded-2xl p-6 cursor-pointer fade-in stagger-delay-${(index % 6) + 1}`;
    card.onclick = () => openRadioPlayer(station);
    
    const gradients = {
      jazz: 'from-indigo-500 to-purple-600',
      rock: 'from-red-500 to-orange-600',
      electronic: 'from-cyan-500 to-blue-600',
      news: 'from-emerald-500 to-green-600',
      classical: 'from-violet-500 to-purple-600',
      pop: 'from-pink-500 to-rose-600',
      default: 'from-gray-500 to-gray-600'
    };
    const gradientClass = gradients[station.description?.toLowerCase().includes('jazz') ? 'jazz' :
      station.description?.toLowerCase().includes('rock') ? 'rock' :
      station.description?.toLowerCase().includes('electronic') ? 'electronic' :
      station.description?.toLowerCase().includes('news') ? 'news' :
      station.description?.toLowerCase().includes('classical') ? 'classical' :
      station.description?.toLowerCase().includes('pop') ? 'pop' : 'default'];

    card.innerHTML = `
      <div class="flex items-center mb-4">
        <div class="w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mr-4">
          <img src="${station.logo_url}" alt="${station.name}" class="w-full h-full object-contain object-center">
        </div>
        <div class="flex-1">
          <h3 class="text-lg font-semibold mb-1">${station.name}</h3>
          <p class="text-gray-400 text-sm">${station.description || 'Live streaming'}</p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center text-${
          gradientClass.includes('indigo') ? 'indigo' :
          gradientClass.includes('red') ? 'red' :
          gradientClass.includes('cyan') ? 'cyan' :
          gradientClass.includes('emerald') ? 'emerald' :
          gradientClass.includes('violet') ? 'violet' :
          gradientClass.includes('pink') ? 'pink' : 'gray'
        }-300 text-sm">
          <div class="w-2 h-2 bg-green-400 rounded-full mr-2 audio-visualizer"></div>
          <span>Live</span>
        </div>
        <div class="flex space-x-1">
          <div class="w-1 h-4 bg-${gradientClass.split('-')[1]}-400 rounded music-wave" style="animation-delay: 0s;"></div>
          <div class="w-1 h-6 bg-${gradientClass.split('-')[1]}-400 rounded music-wave" style="animation-delay: 0.1s;"></div>
          <div class="w-1 h-3 bg-${gradientClass.split('-')[1]}-400 rounded music-wave" style="animation-delay: 0.2s;"></div>
          <div class="w-1 h-5 bg-${gradientClass.split('-')[1]}-400 rounded music-wave" style="animation-delay: 0.3s;"></div>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}