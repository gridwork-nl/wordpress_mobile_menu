class MobileBtn {
  // Object constructor
  constructor() {
    this.button = document.querySelector(".mobile-menu-btn");
    this.menu = document.getElementById("site-navigation");
    this.desktopMenuParent = document.getElementById("header-inner");
    this.mobileMenuParent = document.querySelector(".side-menu");
    this.events();
  }

  // Adding event listener(s)
  events() {
    this.button.addEventListener("click", () => this.BarsTransform());
    document.addEventListener("DOMContentLoaded", () =>
      this.mobileMenuInsert()
    );
    window.addEventListener("resize", () => this.mobileMenuInsert());
  }

  // Object functions
  BarsTransform() {
    // Adding the animation / changing to X state
    this.button.classList.toggle("change");
    // Displaying the menu from side
    this.mobileMenuParent.classList.toggle("show-menu");
    // hide body scroll
    document.body.classList.toggle("hide-y");
  }

  mobileMenuInsert() {
    // Menu events on mobile / small tablet devices
    if (window.innerWidth <= 900) {
      // injecting the menu nav in mobile (side) menu
      this.mobileMenuParent.appendChild(this.menu);
      // displaying the mobile menu btn
      this.button.classList.remove("display-none");
    } else {
      // reset all mobile menu items to desktop view if window.inner > 900
      this.desktopMenuParent.appendChild(this.menu);
      this.mobileMenuParent.classList.remove("show-menu");
      this.button.classList.remove("change");
      this.button.classList.add("display-none");
      document.body.classList.remove("hide-y");
    }
  }
}

export default MobileBtn;
