// ==========================================
// 1. إدارة القائمة المنسدلة في الموبايل
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-menu');
  });
}

// ==========================================
// 2. إدارة الوضع الليلي / الفاتح (Dark Mode)
// ==========================================
const themeToggleBtn = document.getElementById('themeToggle');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggleBtn.querySelector('i');
    
    if (document.body.classList.contains('dark-theme')) {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  });
}

// ==========================================
// 3. البيانات الوهمية (Mock Data) والجدول
// ==========================================
const usersData = [
  { name: "أحمد محمود", email: "ahmed@example.com", status: "active", statusText: "نشط" },
  { name: "سارة علي", email: "sara@example.com", status: "pending", statusText: "معلق" },
  { name: "محمد السيد", email: "m.elsayed@example.com", status: "active", statusText: "نشط" },
  { name: "فاطمة إبراهيم", email: "fatma@example.com", status: "active", statusText: "نشط" },
  { name: "عمر خالد", email: "omar@example.com", status: "pending", statusText: "معلق" }
];

const userTableBody = document.getElementById('userTableBody');

// دالة لملء الجدول بالبيانات
function renderUsers(users) {
  if (!userTableBody) return;
  
  userTableBody.innerHTML = '';
  
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td><span class="badge ${user.status}">${user.statusText}</span></td>
    `;
    userTableBody.appendChild(row);
  });
}

// تشغيل عرض الجدول لأول مرة
renderUsers(usersData);

// ==========================================
// 4. ميزة البحث اللحظي في الجدول (Search)
// ==========================================
const searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    const filteredUsers = usersData.filter(user => {
      return user.name.toLowerCase().includes(searchTerm) || 
             user.email.toLowerCase().includes(searchTerm);
    });
    
    renderUsers(filteredUsers);
  });
}

// ==========================================
// 5. إنشاء الرسم البياني (Chart.js)
// ==========================================
const chartCanvas = document.getElementById('salesChart');

if (chartCanvas) {
  const ctx = chartCanvas.getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
      datasets: [{
        label: 'المبيعات ($)',
        data: [12000, 19000, 15000, 22000, 18000, 24500],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
