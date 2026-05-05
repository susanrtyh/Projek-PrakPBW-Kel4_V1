const FIXED_USER = "user";
const FIXED_PASS = "todolist";

let currentUser = null; // nyimpen user yang lagi login
let selectedId = null; // nyimpen id task yang lagi dibuka
let view = "my"; // default tampilan awal

// LOGIN
function login() {
  // cek username sama password
  if (username.value === FIXED_USER && password.value === FIXED_PASS) {
    currentUser = FIXED_USER;

    // sembunyiin login, munculin app
    auth.classList.add("hidden");
    app.classList.remove("hidden");

    render(); // langsung tampilkan task
  } else {
    alert("Login salah!");
  }
}

// logout = reload aja biar balik ke awal
function logout() {
  location.reload();
}

// STORAGE

// ambil semua user dari localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || {};
}

// simpan user ke localStorage
function saveUsers(data) {
  localStorage.setItem("users", JSON.stringify(data));
}

// ambil task milik user yang login
function getTasks() {
  let users = getUsers();

  // kalau user belum ada, buat dulu
  if (!users[currentUser]) {
    users[currentUser] = { tasks: [] };
    saveUsers(users);
  }

  return users[currentUser].tasks;
}

// simpan task ke user
function saveTasks(tasks) {
  let users = getUsers();
  users[currentUser] = { tasks };
  saveUsers(users);
}

// VIEW

// ganti tampilan (my, today, done, all)
function setView(v) {
  view = v;
  render();
}

// kasih highlight di menu yang diklik
function setActiveMenu(el) {
  document.querySelectorAll(".sidebar p").forEach(p => p.classList.remove("active"));
  el.classList.add("active");
}

// MODAL

// buka popup tambah task
function openModal() {
  modal.classList.remove("hidden");
}

// tutup popup
function closeModal() {
  modal.classList.add("hidden");
}

// ADD

function addTask() {
  // kalau judul kosong ga boleh lanjut
  if (!mTitle.value.trim()) {
    alert("Judul wajib diisi!");
    return;
  }

  let tasks = getTasks();

  // masukin task baru
  tasks.push({
    id: Date.now(), // id unik
    title: mTitle.value,
    desc: mDesc.value,
    date: mDate.value,
    priority: mPriority.value,
    done: false
  });

  saveTasks(tasks);

  closeModal(); // tutup popup
  render(); // refresh list
}

// RENDER (tampilin semua task)

function render() {
  taskList.innerHTML = "";

  let tasks = getTasks();
  let today = new Date().toISOString().split("T")[0];

  // filter sesuai menu
  let filtered = tasks.filter(t => {
    if (view === "my") return !t.done;
    if (view === "today") return t.date === today;
    if (view === "done") return t.done;
    return true;
  });

  // kalau kosong
  if (filtered.length === 0) {
    taskList.innerHTML = `<p class="empty">Tidak ada task</p>`;
    return;
  }

  // looping task
  filtered.forEach(t => {
    let li = document.createElement("li");

    // bagian kiri (judul + priority)
    let left = document.createElement("div");
    left.className = t.done ? "done" : "";
    left.innerHTML = `${t.title}
      <span class="badge ${t.priority}">${t.priority}</span>`;

    // tombol centang
    let btn = document.createElement("button");
    btn.innerText = "✔";

    btn.onclick = (e) => {
      e.stopPropagation(); // biar ga ikut buka detail
      t.done = !t.done; // toggle done
      saveTasks(tasks);
      render();
    };

    li.appendChild(left);
    li.appendChild(btn);

    // klik item buka detail
    li.onclick = () => openDetail(t.id);

    taskList.appendChild(li);
  });
}

// DETAIL

function openDetail(id) {
  let t = getTasks().find(x => x.id === id);

  selectedId = id;

  // isi form detail
  dTitle.value = t.title;
  dDesc.value = t.desc;
  dDate.value = t.date;
  dPriority.value = t.priority;

  // pindah halaman
  listPage.classList.add("hidden");
  detailPage.classList.remove("hidden");
}

// balik ke list
function back() {
  detailPage.classList.add("hidden");
  listPage.classList.remove("hidden");
}

// SAVE

function saveDetail() {
  let tasks = getTasks();
  let t = tasks.find(x => x.id === selectedId);

  // update data
  t.title = dTitle.value;
  t.desc = dDesc.value;
  t.date = dDate.value;
  t.priority = dPriority.value;

  saveTasks(tasks);
  back();
  render();
}

// DONE dari halaman detail

function toggleDone() {
  let tasks = getTasks();
  let t = tasks.find(x => x.id === selectedId);

  t.done = !t.done;

  saveTasks(tasks);
  back();
  render();
}

// DELETE

function deleteTask() {
  let tasks = getTasks().filter(t => t.id !== selectedId);
  saveTasks(tasks);
  back();
  render();
}