export function Sidebar() {
  return (
    <>
      <div className="sidebar fixed bottom-0 left-0 top-0 z-[3] h-[calc(100%_-_0px)] w-[80px] bg-[#2f2cd8]">
        <div className="logo m-5 text-center">
          <a
            href="#"
            className="full-logo text-[#2F2CD8]  no-underline	outline-none "
          >
            <img
              src="/public/logoi.png"
              className="w-[30px] bg-white brightness-100"
              alt=""
            />
          </a>
        </div>
        <div className="menu active relative mt-[30px] p-5">
          <ul className="show">
            <li className="active  mb-2 list-none rounded-md">
              <a
                href="#"
                className="active flex min-h-14 items-center pb-1 pl-2 pr-2 pt-1 text-[#7184ad]"
              >
                <span className="text-white">
                  <i class="fa-solid fa-chart-line "></i>
                </span>
                <span class="nav-text ml-2  hidden rounded-lg bg-white pb-1 pl-2 pr-2 pt-1 text-[#2e2cd8] shadow">
                  Home
                </span>
              </a>
            </li>
            <li className="active  mb-2 list-none rounded-md">
              <a
                href="#"
                className="active flex min-h-14 items-center pb-1 pl-2 pr-2 pt-1 text-[#7184ad]"
              >
                <span className="hover:text-white">
                  <i class="fa-solid fa-wallet "></i>
                </span>
                <span class="nav-text ml-2  hidden rounded-lg bg-white pb-1 pl-2 pr-2 pt-1 text-[#2e2cd8] shadow">
                  Wallets
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
