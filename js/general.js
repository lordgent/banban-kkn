document.getElementById("toogle").addEventListener("click", function () {
    const sidebar = document.getElementById("containerSideBar");
    if (sidebar.style.display === "flex") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "flex";
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.getElementById('my-whatsapp');
    whatsappButton.addEventListener('click', function () {
        const phone = '628817083978';
        const message = 'Hi there!';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});
