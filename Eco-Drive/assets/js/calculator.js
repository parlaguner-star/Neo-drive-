// Eco Drive - Hesaplama Mantığı
// Bu dosya araç karbon salımı ve ağaç sayısı hesaplamalarını yapar

let vehiclesData = [];

// Fallback: Eğer JSON yüklenemezse kullanılacak veriler
const FALLBACK_VEHICLES = [
  { "id": "car-1", "type": "car", "name": "Toyota Corolla", "fuelType": "Benzin", "emissionPerKm": 0.120 },
  { "id": "car-2", "type": "car", "name": "Volkswagen Golf", "fuelType": "Benzin", "emissionPerKm": 0.135 },
  { "id": "car-3", "type": "car", "name": "Renault Clio", "fuelType": "Benzin", "emissionPerKm": 0.115 },
  { "id": "car-4", "type": "car", "name": "Fiat Egea", "fuelType": "Dizel", "emissionPerKm": 0.110 },
  { "id": "car-5", "type": "car", "name": "Hyundai i20", "fuelType": "Benzin", "emissionPerKm": 0.118 },
  { "id": "car-6", "type": "car", "name": "Ford Focus", "fuelType": "Benzin", "emissionPerKm": 0.140 },
  { "id": "car-7", "type": "car", "name": "Opel Astra", "fuelType": "Dizel", "emissionPerKm": 0.125 },
  { "id": "car-8", "type": "car", "name": "Peugeot 301", "fuelType": "Dizel", "emissionPerKm": 0.108 },
  { "id": "car-9", "type": "car", "name": "Nissan Qashqai", "fuelType": "Benzin", "emissionPerKm": 0.155 },
  { "id": "car-10", "type": "car", "name": "Honda Civic", "fuelType": "Benzin", "emissionPerKm": 0.128 },
  { "id": "car-11", "type": "car", "name": "Mazda 3", "fuelType": "Benzin", "emissionPerKm": 0.130 },
  { "id": "car-12", "type": "car", "name": "Skoda Octavia", "fuelType": "Dizel", "emissionPerKm": 0.122 },
  { "id": "car-13", "type": "car", "name": "Seat Leon", "fuelType": "Benzin", "emissionPerKm": 0.136 },
  { "id": "car-14", "type": "car", "name": "Dacia Sandero", "fuelType": "Benzin", "emissionPerKm": 0.110 },
  { "id": "car-15", "type": "car", "name": "Citroen C4", "fuelType": "Benzin", "emissionPerKm": 0.132 },
  { "id": "car-16", "type": "car", "name": "Kia Sportage", "fuelType": "Dizel", "emissionPerKm": 0.148 },
  { "id": "car-17", "type": "car", "name": "BMW 3 Serisi", "fuelType": "Benzin", "emissionPerKm": 0.175 },
  { "id": "car-18", "type": "car", "name": "Mercedes C Serisi", "fuelType": "Dizel", "emissionPerKm": 0.155 },
  { "id": "car-19", "type": "car", "name": "Audi A4", "fuelType": "Benzin", "emissionPerKm": 0.172 },
  { "id": "car-20", "type": "car", "name": "Volvo S60", "fuelType": "Benzin", "emissionPerKm": 0.168 },
  { "id": "moto-1", "type": "motorcycle", "name": "Honda PCX 125", "fuelType": "Benzin", "emissionPerKm": 0.055 },
  { "id": "moto-2", "type": "motorcycle", "name": "Yamaha NMAX 155", "fuelType": "Benzin", "emissionPerKm": 0.065 },
  { "id": "moto-3", "type": "motorcycle", "name": "Suzuki Address 110", "fuelType": "Benzin", "emissionPerKm": 0.050 },
  { "id": "moto-4", "type": "motorcycle", "name": "Kymco Agility 125", "fuelType": "Benzin", "emissionPerKm": 0.058 },
  { "id": "moto-5", "type": "motorcycle", "name": "Kawasaki Ninja 300", "fuelType": "Benzin", "emissionPerKm": 0.070 },
  { "id": "moto-6", "type": "motorcycle", "name": "Honda CB 125F", "fuelType": "Benzin", "emissionPerKm": 0.052 },
  { "id": "moto-7", "type": "motorcycle", "name": "Yamaha YBR 125", "fuelType": "Benzin", "emissionPerKm": 0.053 },
  { "id": "moto-8", "type": "motorcycle", "name": "Bajaj Pulsar NS160", "fuelType": "Benzin", "emissionPerKm": 0.062 },
  { "id": "moto-9", "type": "motorcycle", "name": "Mondial 150 MH", "fuelType": "Benzin", "emissionPerKm": 0.060 },
  { "id": "moto-10", "type": "motorcycle", "name": "Kanuni Toros 250", "fuelType": "Benzin", "emissionPerKm": 0.075 }
];

/**
 * Sayfa yüklendiğinde araç verilerini çeker
 */
async function loadVehicles() {
  try {
    // Farklı path seçeneklerini dene
    const paths = [
      './data/vehicles.json',
      'data/vehicles.json',
      '/data/vehicles.json',
      '../data/vehicles.json'
    ];

    let loaded = false;
    for (const path of paths) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          vehiclesData = await response.json();
          console.log('Araç verileri yüklendi:', vehiclesData.length, 'araç');
          loaded = true;
          break;
        }
      } catch (e) {
        continue;
      }
    }

    if (!loaded) {
      // Fallback verileri kullan
      console.warn('JSON dosyası yüklenemedi, fallback veriler kullanılıyor.');
      vehiclesData = FALLBACK_VEHICLES;
      console.log('Fallback araç verileri yüklendi:', vehiclesData.length, 'araç');
    }
  } catch (error) {
    console.error('Araç verileri yüklenirken hata oluştu:', error);

    // Fallback: Eğer fetch çalışmazsa, fallback verileri kullan
    console.warn('Fetch başarısız, fallback veriler kullanılıyor.');
    vehiclesData = FALLBACK_VEHICLES;
    console.log('Fallback araç verileri yüklendi:', vehiclesData.length, 'araç');

    // Kullanıcıya bilgi ver (sadece ilk kez)
    if (!document.getElementById('json-warning')) {
      const errorMsg = document.createElement('div');
      errorMsg.id = 'json-warning';
      errorMsg.style.cssText = 'background: #fff3cd; color: #856404; padding: 0.75rem; margin: 1rem 0; border-radius: 0.5rem; border: 2px solid #ffc107; font-size: 0.9rem;';
      errorMsg.innerHTML = `
        <strong>💡 İpucu:</strong> Daha iyi performans için local server kullanın:<br>
        <code style="background: #fff; padding: 0.25rem 0.5rem; border-radius: 0.25rem; display: inline-block; margin-top: 0.5rem;">
          python3 -m http.server 8000
        </code>
        <br><small>Sonra tarayıcıda http://localhost:8000 adresine gidin.</small>
      `;
      const calculatorCard = document.querySelector('.calculator-card');
      if (calculatorCard) {
        calculatorCard.insertBefore(errorMsg, calculatorCard.firstChild);
      }
    }
  }

  // Veriler yüklendikten sonra select'i güncelle
  if (vehiclesData.length > 0) {
    const vehicleTypeSelect = document.getElementById('vehicleType');
    if (vehicleTypeSelect && vehicleTypeSelect.value) {
      updateVehicleModels();
    }
  }
}

/**
 * Araç tipi seçildiğinde model listesini günceller
 */
function updateVehicleModels() {
  const vehicleType = document.getElementById('vehicleType').value;
  const vehicleModelSelect = document.getElementById('vehicleModel');

  // Select'i temizle
  vehicleModelSelect.innerHTML = '<option value="">Araç modeli seçin...</option>';

  if (!vehicleType) {
    vehicleModelSelect.disabled = true;
    return;
  }

  // Seçilen tipe göre araçları filtrele
  const filteredVehicles = vehiclesData.filter(v => v.type === vehicleType);

  // Option'ları ekle
  filteredVehicles.forEach(vehicle => {
    const option = document.createElement('option');
    option.value = vehicle.id;
    option.textContent = `${vehicle.name} (${vehicle.fuelType})`;
    option.dataset.emission = vehicle.emissionPerKm;
    option.dataset.fuelType = vehicle.fuelType;
    vehicleModelSelect.appendChild(option);
  });

  vehicleModelSelect.disabled = false;
}

/**
 * CO2 salımından ağaç sayısını hesaplar
 * @param {number} emissionPerKm - Km başına CO2 salımı (kg)
 * @param {number} yearlyKm - Yıllık km
 * @returns {number} - Dikilmesi gereken tahmini ağaç sayısı
 */
function calculateTrees(emissionPerKm, yearlyKm) {
  // Toplam yıllık CO2 salımı (kg)
  const totalCO2 = emissionPerKm * yearlyKm;

  // Bir ağacın yılda emdiği ortalama CO2 miktarı: yaklaşık 21 kg
  // Bu değer örnek olup, proje ilerledikçe güncellenecektir
  const CO2_PER_TREE_YEARLY = 21;

  // Gerekli ağaç sayısı
  const treesNeeded = totalCO2 / CO2_PER_TREE_YEARLY;

  return Math.ceil(treesNeeded); // Yukarı yuvarla
}

/**
 * Hesaplama formunu işler
 */
function handleCalculation(event) {
  event.preventDefault();

  // Form değerlerini al
  const vehicleType = document.getElementById('vehicleType').value;
  const vehicleModelId = document.getElementById('vehicleModel').value;
  const yearlyKm = parseFloat(document.getElementById('yearlyKm').value);

  // Validasyon
  if (!vehicleType) {
    alert('Lütfen araç tipi seçin.');
    return;
  }

  if (!vehicleModelId) {
    alert('Lütfen araç modeli seçin.');
    return;
  }

  if (!yearlyKm || yearlyKm <= 0) {
    alert('Lütfen geçerli bir yıllık km değeri girin.');
    return;
  }

  if (yearlyKm > 100000) {
    alert('Yıllık km değeri çok yüksek görünüyor. Lütfen kontrol edin.');
    return;
  }

  // Seçilen aracı bul
  const selectedVehicle = vehiclesData.find(v => v.id === vehicleModelId);

  if (!selectedVehicle) {
    alert('Araç bilgisi bulunamadı.');
    return;
  }

  // Hesaplama yap
  const treesNeeded = calculateTrees(selectedVehicle.emissionPerKm, yearlyKm);
  const totalCO2 = (selectedVehicle.emissionPerKm * yearlyKm).toFixed(2);

  // Sonucu göster
  displayResult(treesNeeded, totalCO2, selectedVehicle.name, yearlyKm, selectedVehicle.fuelType);
}

/**
 * Çocuk dostu mesaj oluşturur
 */
function getChildFriendlyMessage(treesNeeded) {
  if (treesNeeded <= 10) {
    return `Bu da küçük bir sınıfın birlikte dikebileceği kadar ağaç!`;
  } else if (treesNeeded <= 50) {
    return `Bu da birkaç sınıfın birlikte dikebileceği kadar ağaç!`;
  } else if (treesNeeded <= 100) {
    return `Bu da tüm okulun birlikte dikebileceği kadar ağaç!`;
  } else {
    return `Bu da birçok okulun birlikte dikebileceği kadar ağaç!`;
  }
}

/**
 * Ağaç görselleştirmesini oluşturur
 */
function visualizeTrees(treesNeeded) {
  const treeVisualization = document.getElementById('treeVisualization');
  const treeGrid = document.getElementById('treeGrid');
  const treeInfo = document.getElementById('treeInfo');

  if (!treeVisualization || !treeGrid || !treeInfo) return;

  // Maksimum 20 ağaç ikonu göster
  const MAX_TREES = 20;
  const treesToShow = Math.min(treesNeeded, MAX_TREES);
  const treesPerIcon = treesNeeded > MAX_TREES ? Math.ceil(treesNeeded / MAX_TREES) : 1;

  // Önceki ağaçları temizle
  treeGrid.innerHTML = '';

  // Ağaç emoji çeşitleri
  const treeEmojis = ['🌳', '🌲', '🌴', '🎄'];

  // Ağaç ikonlarını oluştur
  for (let i = 0; i < treesToShow; i++) {
    const treeItem = document.createElement('div');
    treeItem.className = 'tree-item';
    treeItem.textContent = treeEmojis[Math.floor(Math.random() * treeEmojis.length)];
    treeGrid.appendChild(treeItem);
  }

  // Bilgi metnini oluştur
  if (treesNeeded > MAX_TREES) {
    treeInfo.textContent = `Her ağaç ikonu ${treesPerIcon} ağacı temsil ediyor. Toplam ${treesNeeded} ağaç dikilmesi gerekiyor!`;
  } else {
    treeInfo.textContent = `Toplam ${treesNeeded} ağaç dikilmesi gerekiyor!`;
  }

  // Görselleştirme bölümünü göster
  treeVisualization.classList.add('active');

  // Animasyon için kısa bir gecikme
  setTimeout(() => {
    treeVisualization.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 500);
}

/**
 * Hesaplama sonucunu ekranda gösterir
 */
function displayResult(treesNeeded, totalCO2, vehicleName, yearlyKm, fuelType) {
  const resultSection = document.getElementById('resultSection');
  const resultNumber = document.getElementById('resultNumber');
  const resultText = document.getElementById('resultText');

  // Sonuç metnini oluştur
  const formattedKm = yearlyKm.toLocaleString('tr-TR');
  const formattedCO2 = parseFloat(totalCO2).toLocaleString('tr-TR');
  const friendlyMessage = getChildFriendlyMessage(treesNeeded);

  // Confetti animasyonu göster (eğer animations.js yüklüyse)
  if (window.ecoAnimations && window.ecoAnimations.createConfetti) {
    window.ecoAnimations.createConfetti();
  }

  // Sayı animasyonu ile göster
  if (window.ecoAnimations && window.ecoAnimations.animateNumber) {
    resultNumber.textContent = '0 AĞAÇ';
    window.ecoAnimations.animateNumber(resultNumber, 0, treesNeeded, 1500);
    // Animasyon bitince "AĞAÇ" ekle
    setTimeout(() => {
      resultNumber.textContent = treesNeeded + ' AĞAÇ';
    }, 1500);
  } else {
    resultNumber.textContent = treesNeeded + ' AĞAÇ';
  }
  resultText.innerHTML = `
    <strong>${vehicleName}</strong> (${fuelType || 'Benzin'}) ile yılda <strong>${formattedKm} km</strong> yol aldığınızda,
    yaklaşık <strong>${formattedCO2} kg CO₂</strong> salımı yaparsınız.<br><br>
    Bu karbon ayak izini dengelemek için <strong style="color: var(--color-primary); font-size: 1.2em;">${treesNeeded} ağaç</strong> dikilmesi gerekir.<br><br>
    <span style="color: var(--color-secondary); font-weight: 600; font-size: 1.1em;">${friendlyMessage}</span>
  `;

  // Sonuç bölümünü göster
  resultSection.classList.add('active');

  // Ağaç görselleştirmesini oluştur
  visualizeTrees(treesNeeded);

  // Sonuç bölümüne kaydır
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Sayfa yüklendiğinde çalışacak fonksiyon
 */
document.addEventListener('DOMContentLoaded', function () {
  // Araç verilerini yükle
  loadVehicles();

  // Event listener'ları ekle
  const vehicleTypeSelect = document.getElementById('vehicleType');
  const calculatorForm = document.getElementById('calculatorForm');

  if (vehicleTypeSelect) {
    vehicleTypeSelect.addEventListener('change', updateVehicleModels);
  }

  if (calculatorForm) {
    calculatorForm.addEventListener('submit', handleCalculation);
  }
});

