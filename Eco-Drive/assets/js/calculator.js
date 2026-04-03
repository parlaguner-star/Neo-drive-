// Araç verisi global değişkeni
window.vehiclesData = [];

// Fallback: Eğer JSON yüklenemezse kullanılacak güncel Türkiye verileri
const FALLBACK_VEHICLES = [
  { "id": "fiat-egea-s-b", "type": "car", "name": "Fiat Egea Sedan", "fuelType": "Benzin", "emissionPerKm": 0.135 },
  { "id": "fiat-egea-s-d", "type": "car", "name": "Fiat Egea Sedan", "fuelType": "Dizel", "emissionPerKm": 0.110 },
  { "id": "fiat-egea-s-h", "type": "car", "name": "Fiat Egea Sedan", "fuelType": "Hibrit", "emissionPerKm": 0.098 },
  { "id": "fiat-egea-c-b", "type": "car", "name": "Fiat Egea Cross", "fuelType": "Benzin", "emissionPerKm": 0.138 },
  { "id": "fiat-egea-c-d", "type": "car", "name": "Fiat Egea Cross", "fuelType": "Dizel", "emissionPerKm": 0.115 },
  { "id": "fiat-egea-c-h", "type": "car", "name": "Fiat Egea Cross", "fuelType": "Hibrit", "emissionPerKm": 0.102 },
  { "id": "fiat-500-e", "type": "car", "name": "Fiat 500e", "fuelType": "Elektrik", "emissionPerKm": 0.018 },
  { "id": "renault-clio-b", "type": "car", "name": "Renault Clio", "fuelType": "Benzin", "emissionPerKm": 0.115 },
  { "id": "renault-clio-h", "type": "car", "name": "Renault Clio", "fuelType": "Hibrit", "emissionPerKm": 0.088 },
  { "id": "renault-megane-b", "type": "car", "name": "Renault Megane Sedan", "fuelType": "Benzin", "emissionPerKm": 0.125 },
  { "id": "renault-megane-d", "type": "car", "name": "Renault Megane Sedan", "fuelType": "Dizel", "emissionPerKm": 0.118 },
  { "id": "renault-austral-h", "type": "car", "name": "Renault Austral", "fuelType": "Hibrit", "emissionPerKm": 0.105 },
  { "id": "renault-zoe-e", "type": "car", "name": "Renault Zoe", "fuelType": "Elektrik", "emissionPerKm": 0.015 },
  { "id": "toyota-corolla-b", "type": "car", "name": "Toyota Corolla", "fuelType": "Benzin", "emissionPerKm": 0.130 },
  { "id": "toyota-corolla-h", "type": "car", "name": "Toyota Corolla", "fuelType": "Hibrit", "emissionPerKm": 0.082 },
  { "id": "toyota-chr-h", "type": "car", "name": "Toyota C-HR", "fuelType": "Hibrit", "emissionPerKm": 0.086 },
  { "id": "toyota-yaris-h", "type": "car", "name": "Toyota Yaris", "fuelType": "Hibrit", "emissionPerKm": 0.075 },
  { "id": "togg-t10x-e", "type": "car", "name": "Togg T10X", "fuelType": "Elektrik", "emissionPerKm": 0.015 },
  { "id": "togg-t10f-e", "type": "car", "name": "Togg T10F", "fuelType": "Elektrik", "emissionPerKm": 0.014 },
  { "id": "vw-golf-b", "type": "car", "name": "Volkswagen Golf", "fuelType": "Benzin", "emissionPerKm": 0.128 },
  { "id": "vw-golf-d", "type": "car", "name": "Volkswagen Golf", "fuelType": "Dizel", "emissionPerKm": 0.115 },
  { "id": "vw-polo-b", "type": "car", "name": "Volkswagen Polo", "fuelType": "Benzin", "emissionPerKm": 0.112 },
  { "id": "vw-passat-b", "type": "car", "name": "Volkswagen Passat", "fuelType": "Benzin", "emissionPerKm": 0.145 },
  { "id": "vw-passat-d", "type": "car", "name": "Volkswagen Passat", "fuelType": "Dizel", "emissionPerKm": 0.130 },
  { "id": "hyundai-i10-b", "type": "car", "name": "Hyundai i10", "fuelType": "Benzin", "emissionPerKm": 0.110 },
  { "id": "hyundai-i20-b", "type": "car", "name": "Hyundai i20", "fuelType": "Benzin", "emissionPerKm": 0.118 },
  { "id": "hyundai-tucson-b", "type": "car", "name": "Hyundai Tucson", "fuelType": "Benzin", "emissionPerKm": 0.148 },
  { "id": "hyundai-tucson-d", "type": "car", "name": "Hyundai Tucson", "fuelType": "Dizel", "emissionPerKm": 0.135 },
  { "id": "hyundai-tucson-h", "type": "car", "name": "Hyundai Tucson", "fuelType": "Hibrit", "emissionPerKm": 0.122 },
  { "id": "peugeot-208-b", "type": "car", "name": "Peugeot 208", "fuelType": "Benzin", "emissionPerKm": 0.115 },
  { "id": "peugeot-208-e", "type": "car", "name": "Peugeot e-208", "fuelType": "Elektrik", "emissionPerKm": 0.016 },
  { "id": "peugeot-2008-b", "type": "car", "name": "Peugeot 2008", "fuelType": "Benzin", "emissionPerKm": 0.122 },
  { "id": "peugeot-2008-e", "type": "car", "name": "Peugeot e-2008", "fuelType": "Elektrik", "emissionPerKm": 0.017 },
  { "id": "peugeot-3008-h", "type": "car", "name": "Peugeot 3008", "fuelType": "Hibrit", "emissionPerKm": 0.110 },
  { "id": "opel-corsa-b", "type": "car", "name": "Opel Corsa", "fuelType": "Benzin", "emissionPerKm": 0.112 },
  { "id": "opel-corsa-e", "type": "car", "name": "Opel Corsa-e", "fuelType": "Elektrik", "emissionPerKm": 0.017 },
  { "id": "opel-astra-b", "type": "car", "name": "Opel Astra", "fuelType": "Benzin", "emissionPerKm": 0.125 },
  { "id": "opel-astra-h", "type": "car", "name": "Opel Astra", "fuelType": "Hibrit", "emissionPerKm": 0.095 },
  { "id": "dacia-duster-b", "type": "car", "name": "Dacia Duster", "fuelType": "Benzin", "emissionPerKm": 0.142 },
  { "id": "dacia-duster-d", "type": "car", "name": "Dacia Duster", "fuelType": "Dizel", "emissionPerKm": 0.128 },
  { "id": "dacia-duster-l", "type": "car", "name": "Dacia Duster", "fuelType": "LPG", "emissionPerKm": 0.132 },
  { "id": "tesla-model-y-e", "type": "car", "name": "Tesla Model Y", "fuelType": "Elektrik", "emissionPerKm": 0.012 },
  { "id": "tesla-model-3-e", "type": "car", "name": "Tesla Model 3", "fuelType": "Elektrik", "emissionPerKm": 0.011 },
  { "id": "byd-atto3-e", "type": "car", "name": "BYD Atto 3", "fuelType": "Elektrik", "emissionPerKm": 0.014 },
  { "id": "byd-sealu-h", "type": "car", "name": "BYD Seal U", "fuelType": "Hibrit", "emissionPerKm": 0.092 },
  { "id": "chery-tiggo7-b", "type": "car", "name": "Chery Tiggo 7 Pro", "fuelType": "Benzin", "emissionPerKm": 0.165 },
  { "id": "chery-tiggo8-b", "type": "car", "name": "Chery Tiggo 8 Pro", "fuelType": "Benzin", "emissionPerKm": 0.175 },
  { "id": "chery-omoda5-b", "type": "car", "name": "Chery Omoda 5", "fuelType": "Benzin", "emissionPerKm": 0.160 }
];

/**
 * Sayfa yüklendiğinde araç verilerini çeker
 */
async function loadVehicles() {
  console.log('Araç verileri yüklenmeye başlanıyor...');
  try {
    const paths = [
      './data/vehicles.json',
      'data/vehicles.json',
      '/Eco-Drive/data/vehicles.json' // Added potential GitHub Pages subfolder path
    ];

    let loaded = false;
    const cacheBuster = `?t=${Date.now()}`;

    for (const path of paths) {
      try {
        const finalPath = path + cacheBuster;
        console.log(`Denenecek yol: ${finalPath}`);
        const response = await fetch(finalPath);
        if (response.ok) {
          window.vehiclesData = await response.json();
          console.log('JSON verisi başarıyla yüklendi.');
          loaded = true;
          break;
        } else {
          console.warn(`Yükleme başarısız (${response.status}): ${path}`);
        }
      } catch (e) {
        console.error(`Yol denemesinde hata: ${path}`, e);
        continue;
      }
    }

    if (!loaded) {
      console.log('Canlı veri yüklenemedi, yedek verilere (FALLBACK) geçiliyor...');
      window.vehiclesData = FALLBACK_VEHICLES;
    }

    // Verileri işle (Marka ve Model'i ayır)
    processVehiclesData();
    initializeFilters();
    console.log('Filtreler başarıyla başlatıldı.');
  } catch (error) {
    console.error('Araç verileri yüklenirken kritik hata:', error);
    window.vehiclesData = FALLBACK_VEHICLES;
    processVehiclesData();
    initializeFilters();
  }
}

/**
 * Verileri işle (Marka ve Model'i ayır)
 */
function processVehiclesData() {
  if (!Array.isArray(window.vehiclesData)) {
    console.error('vehiclesData bir dizi değil:', window.vehiclesData);
    window.vehiclesData = FALLBACK_VEHICLES;
  }
  window.vehiclesData = window.vehiclesData.map(v => {
    const parts = v.name.split(' ');
    return {
      ...v,
      brand: parts[0],
      model: parts.slice(1).join(' ')
    };
  });
}

function initializeFilters() {
  const brandSelect = document.getElementById('vehicleBrand');
  const yearSelect = document.getElementById('vehicleYear');

  // Translation support
  const t = window.t || (typeof translations !== 'undefined' ? translations['tr'] : {});
  if (!brandSelect || !yearSelect) return;

  // Markaları doldur
  const brands = [...new Set(window.vehiclesData.map(v => v.brand))].sort();
  brandSelect.innerHTML = `<option value="">${t.select_brand || 'Marka seçin...'}</option>`;
  brands.forEach(brand => {
    const opt = document.createElement('option');
    opt.value = brand;
    opt.textContent = brand;
    brandSelect.appendChild(opt);
  });

  // Yılları doldur (2010 - 2026)
  yearSelect.innerHTML = `<option value="">${t.select_fuel || 'Seçiniz...'}</option>`;
  for (let year = 2026; year >= 2010; year--) {
    const opt = document.createElement('option');
    opt.value = year;
    opt.textContent = year;
    yearSelect.appendChild(opt);
  }
}

/**
 * Marka seçildiğinde modelleri günceller
 */
function updateVehicleModels() {
  const brand = document.getElementById('vehicleBrand').value;
  const modelSelect = document.getElementById('vehicleModel');
  const fuelSelect = document.getElementById('fuelType');

  // Translation support
  const t = window.t || (typeof translations !== 'undefined' ? translations['tr'] : {});
  if (!modelSelect || !fuelSelect) return;

  modelSelect.innerHTML = `<option value="">${t.select_model || 'Model seçin...'}</option>`;
  fuelSelect.innerHTML = `<option value="">${t.select_fuel || 'Seçiniz...'}</option>`;
  fuelSelect.disabled = true;

  if (!brand) {
    modelSelect.disabled = true;
    return;
  }

  const models = [...new Set(window.vehiclesData.filter(v => v.brand === brand).map(v => v.model))].sort();
  models.forEach(model => {
    const opt = document.createElement('option');
    opt.value = model;
    opt.textContent = model;
    modelSelect.appendChild(opt);
  });

  modelSelect.disabled = false;
}

/**
 * Model seçildiğinde yakıt tiplerini günceller
 */
function updateFuelTypes() {
  const brand = document.getElementById('vehicleBrand').value;
  const model = document.getElementById('vehicleModel').value;
  const fuelSelect = document.getElementById('fuelType');

  // Translation support
  const t = window.t || (typeof translations !== 'undefined' ? translations['tr'] : {});
  if (!fuelSelect) return;

  fuelSelect.innerHTML = `<option value="">${t.select_fuel || 'Seçiniz...'}</option>`;

  if (!model) {
    fuelSelect.disabled = true;
    return;
  }

  // SADECE seçilen marka ve modele ait yakıt tiplerini filtrele
  const availableVehicles = window.vehiclesData.filter(v => v.brand === brand && v.model === model);

  availableVehicles.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.id;
    opt.textContent = v.fuelType;
    fuelSelect.appendChild(opt);
  });

  fuelSelect.disabled = false;
}

/**
 * CO2 salımından ağaç sayısını hesaplar
 */
function calculateTrees(emissionPerKm, yearlyKm) {
  const totalCO2 = emissionPerKm * yearlyKm;
  const CO2_PER_TREE_YEARLY = 21; // Ortalama 21kg CO2 emilimi
  return Math.ceil(totalCO2 / CO2_PER_TREE_YEARLY);
}

/**
 * Hesaplama formunu işler
 */
function handleCalculation(event) {
  event.preventDefault();

  const vehicleId = document.getElementById('fuelType').value;
  const yearlyKm = parseFloat(document.getElementById('yearlyKm').value);
  const year = document.getElementById('vehicleYear').value;

  if (!vehicleId || !yearlyKm || !year) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  const selectedVehicle = window.vehiclesData.find(v => v.id === vehicleId);
  if (!selectedVehicle) return;

  const treesNeeded = calculateTrees(selectedVehicle.emissionPerKm, yearlyKm);
  const totalCO2 = (selectedVehicle.emissionPerKm * yearlyKm).toFixed(2);

  displayResult(treesNeeded, totalCO2, selectedVehicle, yearlyKm, year);
}

/**
 * Çocuk dostu mesaj oluşturur
 */
function getChildFriendlyMessage(treesNeeded) {
  if (treesNeeded <= 10) return `Küçük bir sınıfın birlikte dikebileceği kadar ağaç!`;
  if (treesNeeded <= 50) return `Birkaç sınıfın birlikte dikebileceği kadar ağaç!`;
  if (treesNeeded <= 100) return `Tüm okulun birlikte dikebileceği kadar ağaç!`;
  return `Birçok okulun birlikte dikebileceği kadar ağaç!`;
}

/**
 * Ağaç görselleştirmesini oluşturur
 */
function visualizeTrees(treesNeeded) {
  const treeVisualization = document.getElementById('treeVisualization');
  const treeGrid = document.getElementById('treeGrid');
  const treeInfo = document.getElementById('treeInfo');

  if (!treeVisualization || !treeGrid || !treeInfo) return;

  const MAX_TREES = 20;
  const treesToShow = Math.min(treesNeeded, MAX_TREES);
  const treesPerIcon = treesNeeded > MAX_TREES ? Math.ceil(treesNeeded / MAX_TREES) : 1;

  treeGrid.innerHTML = '';
  const treeEmojis = ['🌳', '🌲', '🌴', '🎄'];

  for (let i = 0; i < treesToShow; i++) {
    const treeItem = document.createElement('div');
    treeItem.className = 'tree-item';
    treeItem.textContent = treeEmojis[Math.floor(Math.random() * treeEmojis.length)];
    treeGrid.appendChild(treeItem);
  }

  // Bilgi metni
  const t = window.t || translations['tr'];
  if (treesNeeded > MAX_TREES) {
    treeInfo.textContent = t.tree_represent.replace('{count}', treesPerIcon).replace('{total}', treesNeeded);
  } else {
    treeInfo.textContent = t.tree_total.replace('{total}', treesNeeded);
  }

  treeVisualization.classList.add('active');
  setTimeout(() => {
    treeVisualization.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 500);
}

/**
 * Hesaplama sonucunu ekranda gösterir
 */
/**
 * Hesaplama sonucunu ekranda gösterir
 */
function displayResult(treesNeeded, totalCO2, vehicle, yearlyKm, year) {
  const resultSection = document.getElementById('resultSection');
  const resultNumber = document.getElementById('resultNumber');
  const resultText = document.getElementById('resultText');
  const donationSpendText = document.getElementById('donationSpendText');
  const donationButton = document.getElementById('donationButton');

  // Translation support
  const t = window.t || translations['tr'];
  if (!resultNumber || !resultText || !donationSpendText || !donationButton) return;

  const formattedKm = yearlyKm.toLocaleString(window.currentLang === 'en' ? 'en-US' : 'tr-TR');
  const formattedCO2 = parseFloat(totalCO2).toLocaleString(window.currentLang === 'en' ? 'en-US' : 'tr-TR');

  if (window.ecoAnimations && window.ecoAnimations.createConfetti) {
    window.ecoAnimations.createConfetti();
  }

  // Sayı animasyonu
  const treesLabel = t.result_trees || (window.currentLang === 'en' ? 'TREES' : 'AĞAÇ');
  resultNumber.textContent = treesNeeded + ' ' + treesLabel;

  if (window.ecoAnimations && window.ecoAnimations.animateNumber) {
    window.ecoAnimations.animateNumber(resultNumber, 0, treesNeeded, 1500, ' ' + treesLabel);
  }

  // Dinamik mesaj oluşturma
  const vehicleInfo = `${vehicle.brand} ${vehicle.model}`;
  const fuelType = vehicle.fuelType; // Could translate this too if needed

  if (window.currentLang === 'en') {
    resultText.innerHTML = `By driving <strong>${formattedKm} km</strong> yearly in your <strong>${year} ${vehicleInfo} (${fuelType})</strong>, you produce approximately <strong>${formattedCO2} kg CO₂</strong>.<br><br>To balance this carbon footprint, <strong>${treesNeeded} trees</strong> need to be planted.`;
  } else {
    resultText.innerHTML = `<strong>${year} ${vehicleInfo} (${fuelType})</strong> ile yıllık <strong>${formattedKm} km</strong> yaparak yaklaşık <strong>${formattedCO2} kg CO₂</strong> üretiyorsunuz.<br><br>Bu karbon ayak izini dengelemek için <strong>${treesNeeded} ağaç</strong> dikilmesi gerekir.`;
  }

  // Bağış mesajı
  donationSpendText.textContent = t.donation_spending_initial;
  donationSpendText.style.display = 'block';

  donationButton.textContent = t.btn_donation;
  donationButton.style.display = 'inline-block';

  resultSection.classList.add('active');
  visualizeTrees(treesNeeded);

  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

/**
 * Sayfa yüklendiğinde çalışacak fonksiyon
 */
document.addEventListener('DOMContentLoaded', function () {
  loadVehicles();

  const brandSelect = document.getElementById('vehicleBrand');
  const modelSelect = document.getElementById('vehicleModel');
  const calculatorForm = document.getElementById('calculatorForm');

  if (brandSelect) {
    brandSelect.addEventListener('change', updateVehicleModels);
  }

  if (modelSelect) {
    modelSelect.addEventListener('change', updateFuelTypes);
  }

  if (calculatorForm) {
    calculatorForm.addEventListener('submit', handleCalculation);
  }
});
