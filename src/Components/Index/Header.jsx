export function Header() {
  return (
    <div class="header fixed left-[80px] right-0 top-0 z-[2] bg-[#F6F9FC] pb-5 pt-5">
      <div class="container">
        <div class="row flex flex-wrap">
          <div class="col-xxl-12 max-w-full">
            <div class="header-content flex items-center justify-between">
              <div class="header-left flex items-center justify-between">
                <div class="brand-logo hidden">
                  <a class="mini-logo" href="index.html">
                    <img src="./images/logoi.png" alt="" width="40" />
                  </a>
                </div>
                <div class="search min-w-[450px]">
                  <form action="#" className="p-0 outline-none">
                    <div class="input-group relative flex w-full flex-wrap items-stretch">
                      <input
                        type="text"
                        className="form-control h-[45px] pl-[22px] pr-[22px]"
                        placeholder="Search Here"
                      />

                      <span class="input-group-text flex h-[45px] items-center border border-[#e5eaef] bg-[#2F2CD8] pb-[11px] rounded-r-md pl-[15px] pr-[15px]  pt-[11px] text-center text-white justify-center content-center">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="header-right">
                <div class="dark-light-toggle" onclick="themeToggle()">
                  <span class="dark">
                    <i class="fi fi-rr-eclipse-alt"></i>
                  </span>
                  <span class="light">
                    <i class="fi fi-rr-eclipse-alt"></i>
                  </span>
                </div>
                <div class="nav-item dropdown notification">
                  <div data-bs-toggle="dropdown">
                    <div class="notify-bell icon-menu">
                      <span>
                        <i class="fi fi-rs-bells"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    tabindex="-1"
                    role="menu"
                    aria-hidden="true"
                    class="dropdown-menu dropdown-menu-end"
                  >
                    <h4>Recent Notification</h4>
                    <div class="lists">
                      <a class="" href="/#">
                        <div class="d-flex align-items-center">
                          <span class="icon success me-3">
                            <i class="fi fi-bs-check"></i>
                          </span>
                          <div>
                            <p>Account created successfully</p>
                            <span>2024-11-04 12:00:23</span>
                          </div>
                        </div>
                      </a>
                      <a class="" href="/#">
                        <div class="d-flex align-items-center">
                          <span class="icon fail me-3">
                            <i class="fi fi-sr-cross-small"></i>
                          </span>
                          <div>
                            <p>2FA verification failed</p>
                            <span>2024-11-04 12:00:23</span>
                          </div>
                        </div>
                      </a>
                      <a class="" href="/#">
                        <div class="d-flex align-items-center">
                          <span class="icon success me-3">
                            <i class="fi fi-bs-check"></i>
                          </span>
                          <div>
                            <p>Device confirmation completed</p>
                            <span>2024-11-04 12:00:23</span>
                          </div>
                        </div>
                      </a>
                      <a class="" href="/#">
                        <div class="d-flex align-items-center">
                          <span class="icon pending me-3">
                            <i class="fi fi-rr-triangle-warning"></i>
                          </span>
                          <div>
                            <p>Phone verification pending</p>
                            <span>2024-11-04 12:00:23</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="more">
                      <a href="/notifications.html">
                        More<i class="fi fi-bs-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="dropdown profile_log dropdown">
                  <div data-bs-toggle="dropdown">
                    <div class="user icon-menu active">
                      <span>
                        <i class="fi fi-rr-user"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    tabindex="-1"
                    role="menu"
                    aria-hidden="true"
                    class="dropdown-menu dropdown-menu dropdown-menu-end"
                  >
                    <div class="user-email">
                      <div class="user">
                        <span class="thumb">
                          <img
                            class="rounded-full"
                            src="./images/avatar/3.jpg"
                            alt=""
                          />
                        </span>
                        <div class="user-info">
                          <h5>Hafsa Humaira</h5>
                          <span>hello@email.com</span>
                        </div>
                      </div>
                    </div>
                    <a class="dropdown-item" href="/profile.html">
                      <span>
                        <i class="fi fi-rr-user"></i>
                      </span>
                      Profile
                    </a>
                    <a class="dropdown-item" href="/wallets.html">
                      <span>
                        <i class="fi fi-rr-wallet"></i>
                      </span>
                      Wallets
                    </a>
                    <a class="dropdown-item" href="/settings.html">
                      <span>
                        <i class="fi fi-rr-settings"></i>
                      </span>
                      Settings
                    </a>
                    <a class="dropdown-item logout" href="/signin.html">
                      <span>
                        <i class="fi fi-bs-sign-out-alt"></i>
                      </span>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
