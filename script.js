document.getElementById("themeToggle").addEventListener("click", () =>
    {
    document.body.classList.toggle("dark-theme");
    });
    document.getElementById("loadUsersBtn").addEventListener("click",
        async () => {
        try {
        const res = await
        fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
        });
        } catch (err) {
        console.error("Failed to load users:", err);
        }
        }); 
        document.querySelectorAll(".question").forEach((q) => {
            q.addEventListener("click", () => {
            q.nextElementSibling.classList.toggle("visible");
            });
        });
      // Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when scrolled down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll smoothly to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

  