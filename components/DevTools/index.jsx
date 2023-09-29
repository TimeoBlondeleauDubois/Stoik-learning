import styles from './style.module.scss'

export default function DevTools() {
  return (
    <>
      <div className={styles.devTools}>
        <div className={styles.container_display}>
          <div className={styles.list_display_tools}>
            <div
              className={`${styles.tool} ${styles.tool_grid} ${styles.style_active}`}
            >
              <div className={styles.container_grid}>
                <div className={styles.grid}>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                  <div className={styles.col}></div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.tool} ${styles.tool_boxes} ${styles.style_active}`}
            >
              <div className={styles.container_boxes}>
                <div className={styles.box}>
                  <span>Width : 2000px X Height : 1600px</span>
                </div>
                <div className={styles.box}>
                  <span>Scroll : 999px</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.toolbox}>
          <div className={styles.container_tools}>
            <div className={styles.container_list_tools}>
              <div className={styles.tool}>
                <svg
                  fill="#000000"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5,22 C3.34314575,22 2,20.6568542 2,19 L2,5 C2,3.34314575 3.34314575,2 5,2 L19,2 C20.6568542,2 22,3.34314575 22,5 L22,19 C22,20.6568542 20.6568542,22 19,22 L5,22 Z M8,4 L5,4 C4.44771525,4 4,4.44771525 4,5 L4,19 C4,19.5522847 4.44771525,20 5,20 L8,20 L8,4 Z M14,4 L10,4 L10,20 L14,20 L14,4 Z M19,4 L16,4 L16,20 L19,20 C19.5522847,20 20,19.5522847 20,19 L20,5 C20,4.44771525 19.5522847,4 19,4 Z"
                  />
                </svg>
              </div>
              <div className={styles.tool}>
                <svg
                  fill="#000000"
                  viewBox="0 0 24 24"
                  id="up-down-scroll-bar-2"
                  data-name="Flat Line"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    id="primary"
                    points="10 5 12 3 14 5"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2px"
                  ></polyline>
                  <polyline
                    id="primary-2"
                    data-name="primary"
                    points="14 19 12 21 10 19"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2px"
                  ></polyline>
                  <path
                    id="primary-3"
                    data-name="primary"
                    d="M18,12H6m6-4V3m0,18V16"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2px"
                  ></path>
                </svg>
              </div>
              <div className={styles.tool}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7092 2.29502C21.8041 2.3904 21.8757 2.50014 21.9241 2.61722C21.9727 2.73425 21.9996 2.8625 22 2.997L22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H15C14.4477 4 14 3.55228 14 3C14 2.44772 14.4477 2 15 2H20.9998C21.2749 2 21.5242 2.11106 21.705 2.29078L21.7092 2.29502Z"
                    fill="#000000"
                  />
                  <path
                    d="M10.7071 14.7071L5.41421 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3.00069L2.997 22C2.74301 21.9992 2.48924 21.9023 2.29502 21.7092L2.29078 21.705C2.19595 21.6096 2.12432 21.4999 2.07588 21.3828C2.02699 21.2649 2 21.1356 2 21V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071Z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <div className={styles.tool}>
                <svg
                  fill="#000000"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M15,13 L20,13 C21.1045695,13 22,13.8954305 22,15 L22,20 C22,21.1045695 21.1045695,22 20,22 L15,22 C13.8954305,22 13,21.1045695 13,20 L13,15 C13,13.8954305 13.8954305,13 15,13 Z M15,15 L15,20 L20,20 L20,15 L15,15 Z M11,4 L11,20 C11,21.1045695 10.1045695,22 9,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 L9,2 C10.1045695,2 11,2.8954305 11,4 Z M9,4 L4,4 L4,20 L9,20 L9,4 Z M15,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,9 C22,10.1045695 21.1045695,11 20,11 L15,11 C13.8954305,11 13,10.1045695 13,9 L13,4 C13,2.8954305 13.8954305,2 15,2 Z M15,4 L15,9 L20,9 L20,4 L15,4 Z"
                  />
                </svg>
              </div>
              <div className={styles.tool}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 606.2 606.2"
                >
                  <path d="M544 1H62C30 1 4 27 4 59v64c0 32 26 59 58 59h482c32 0 58-27 58-59V59c0-32-26-58-58-58zm16 122c0 9-7 16-16 16H62c-9 0-15-7-15-16V59c0-9 6-16 15-16h482c9 0 16 7 16 16v64z" />
                  <path d="M544 182H62c-32 0-59-26-59-59V59C3 26 30 0 62 0h482c33 0 59 26 59 59v64c0 33-26 59-59 59zM62 1C30 1 4 27 4 59v64c0 32 26 58 58 58h482c32 0 58-26 58-58V59c0-32-26-58-58-58H62zm482 138H62c-9 0-16-7-16-16V59c0-9 7-16 16-16h482c9 0 16 7 16 16v64c0 9-7 16-16 16zM62 44c-8 0-15 6-15 15v64c0 9 7 15 15 15h482c8 0 15-6 15-15V59c0-9-7-15-15-15H62zM544 213H62c-32 0-58 26-58 58v64c0 33 26 59 58 59h482c32 0 58-26 58-59v-64c0-32-26-58-58-58zm16 122c0 9-7 16-16 16H62c-9 0-15-7-15-16v-64c0-9 6-16 15-16h482c9 0 16 7 16 16v64z" />
                  <path d="M544 394H62c-32 0-59-26-59-59v-64c0-33 27-59 59-59h482c33 0 59 26 59 59v64c0 33-26 59-59 59zM62 213c-32 0-58 26-58 58v64c0 32 26 58 58 58h482c32 0 58-26 58-58v-64c0-32-26-58-58-58H62zm482 138H62c-9 0-16-7-16-16v-64c0-9 7-16 16-16h482c9 0 16 7 16 16v64c0 9-7 16-16 16zM62 256c-8 0-15 7-15 15v64c0 9 7 15 15 15h482c8 0 15-6 15-15v-64c0-8-7-15-15-15H62zM544 425H62c-32 0-58 26-58 58v65c0 32 26 58 58 58h482c32 0 58-26 58-58v-65c0-32-26-58-58-58zm16 123c0 8-7 15-16 15H62c-9 0-15-7-15-15v-65c0-9 6-15 15-15h482c9 0 16 6 16 15v65z" />
                  <path d="M544 606H62c-32 0-59-26-59-58v-65c0-33 27-59 59-59h482c33 0 59 26 59 59v65c0 32-26 58-59 58zM62 425c-32 0-58 26-58 58v65c0 31 26 57 58 57h482c32 0 58-26 58-57v-65c0-32-26-58-58-58H62zm482 138H62c-9 0-16-7-16-15v-65c0-9 7-16 16-16h482c9 0 16 7 16 16v65c0 8-7 15-16 15zM62 468c-8 0-15 7-15 15v65c0 8 7 14 15 14h482c8 0 15-6 15-14v-65c0-8-7-15-15-15H62z" />
                </svg>
              </div>
              <div className={styles.tool}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 12L17 12"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.container_menu}>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.25 10.71 11.57 8l2.26-2.26a2.49 2.49 0 0 0 0-3.53 2.5 2.5 0 0 0-3.53 0l-.89.88L8 4.5 5.28 1.75a1.26 1.26 0 0 0-1.76 0L1.75 3.52a1.25 1.25 0 0 0 0 1.77L4.5 8l-.22.22-.89.88-1.75 3.66a1.25 1.25 0 0 0 1.67 1.67l3.62-1.75.49-.49.39-.39.19-.23 2.68 2.68a1.26 1.26 0 0 0 1.76 0l1.77-1.77a1.25 1.25 0 0 0 .04-1.77zm-2.19-8a1.27 1.27 0 0 1 .89.36 1.25 1.25 0 0 1 0 1.77l-1.77-1.72a1.27 1.27 0 0 1 .88-.36zM2.63 4.4 4.4 2.64l.82.82-.87.88.88.88.88-.88 1 1-1.73 1.81zm.13 8.91 1.57-3.23L6 11.74zm4.17-2.4L5.16 9.14 10.3 4l1.76 1.76zm4.67 2.45-2.68-2.67 1.77-1.77.93.93-.88.88.88.89.89-.89.86.87z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
