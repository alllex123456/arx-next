import React from 'react';

function ARXLogo({ className }) {
  return (
    <svg
      className={`hover:fill-[--blue-10] ${className} hover:fill-[--blue-10]`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 537 122"
    >
      <g clipPath="url(#clip0_10_106)">
        <path
          fill=""
          d="M30.231 93.153h-5.373c-.602 0-1.08-.136-1.45-.423a2.742 2.742 0 01-.847-1.08l-1.764-5.206H9.434L7.671 91.65c-.15.383-.424.725-.807 1.039-.397.314-.875.465-1.45.465H0l11.568-29.872h7.096L30.23 93.153zM19.211 81.73l-2.762-8.172a36.753 36.753 0 01-.657-1.831 52.737 52.737 0 01-.697-2.282 32.486 32.486 0 01-1.312 4.168l-2.749 8.144h8.177v-.027z"
        ></path>
        <path
          fill=""
          d="M53.763 93.153h-6.276c-1.162 0-1.996-.437-2.502-1.311l-4.963-8.678c-.233-.368-.493-.642-.78-.806-.287-.164-.697-.26-1.23-.26h-1.764V93.14h-6.933V63.268h9.722c2.16 0 4.006.219 5.524.67 1.518.45 2.762 1.066 3.733 1.858.97.793 1.668 1.722 2.106 2.802.437 1.08.656 2.254.656 3.525a9.46 9.46 0 01-.397 2.747 8.577 8.577 0 01-1.148 2.391 8.736 8.736 0 01-1.873 1.954 10.13 10.13 0 01-2.571 1.421c.451.233.875.52 1.272.875a6.31 6.31 0 011.066 1.243l6.358 10.4zM39.037 77.33c.944 0 1.75-.122 2.407-.355a4.208 4.208 0 001.627-.997c.424-.424.724-.916.916-1.49.191-.56.287-1.175.287-1.83 0-1.313-.424-2.338-1.285-3.075-.862-.738-2.174-1.107-3.966-1.107h-2.789v8.855h2.803z"
        ></path>
        <path
          fill=""
          d="M78.635 93.153h-6.933c-.451 0-.82-.109-1.094-.328a2.425 2.425 0 01-.67-.778L63.95 81.593c-.11.3-.233.56-.37.779l-5.578 9.675a4.495 4.495 0 01-.684.765c-.26.232-.588.341-.998.341h-6.481L59.45 77.78l-9.243-14.498h6.932c.452 0 .78.055.998.178.206.109.397.314.561.587l5.948 10.058c.068-.178.15-.342.232-.52.082-.164.192-.328.301-.519l5.21-8.937c.191-.3.396-.519.601-.656.219-.136.479-.205.793-.205h6.645L69.064 77.48l9.585 15.66-.013.013zM107.034 8.623h-9.12V84.53h25.377V72.45h8.054v20.703H79.688V84.53h9.12V8.623h-9.12V0h27.346v8.623zM132.315 63.856c0-9.62 2.352-17.259 7.069-22.93 4.704-5.67 10.652-8.5 17.858-8.5 7.205 0 12.934 2.638 17.241 7.9 4.308 5.26 6.454 12.653 6.454 22.163 0 9.511-2.283 17.519-6.836 23.381-4.554 5.876-10.529 8.814-17.926 8.814-7.397 0-13.085-2.815-17.392-8.431-4.307-5.617-6.454-13.078-6.454-22.397h-.014zm9.572-1.367c0 7.994 1.285 14.103 3.869 18.298 2.584 4.195 6.303 6.3 11.171 6.3 4.553 0 8.108-1.955 10.638-5.85 2.529-3.894 3.801-9.838 3.801-17.846 0-15.591-4.963-23.38-14.89-23.38-4.758 0-8.382 1.803-10.857 5.384-2.488 3.594-3.719 9.292-3.719 17.08l-.013.014zM184.93 53.826c0-6.272 1.969-11.41 5.92-15.414 3.952-4.004 9.011-5.999 15.191-5.999 2.229 0 4.253.26 6.071.765 1.614.506 3.446.766 5.47.766h14.438v7.283h-8.655v.15c1.928 3.334 2.885 7.038 2.885 11.082 0 6.683-1.955 12.094-5.852 16.248-3.897 4.154-8.942 6.218-15.122 6.218-2.831 0-5.374-.397-7.603-1.217-1.928 2.228-2.885 4.36-2.885 6.382 0 1.216.411 2.173 1.217 2.883.807.71 2.079 1.066 3.801 1.066h10.638c6.686 0 11.827 1.367 15.423 4.1 3.596 2.732 5.388 6.777 5.388 12.148 0 6.572-2.639 11.847-7.903 15.796-5.265 3.949-11.896 5.917-19.909 5.917-6.481 0-11.704-1.517-15.642-4.55-3.951-3.034-5.92-6.928-5.92-11.698 0-5.465 2.734-10.48 8.204-15.03-2.434-2.023-3.651-4.66-3.651-7.9 0-4.044 2.174-7.898 6.536-11.532-5.374-4.155-8.054-9.962-8.054-17.464h.014zm10.788 39.327c-3.145 3.034-4.703 6.573-4.703 10.632 0 3.443 1.107 6.149 3.336 8.117 2.229 1.967 5.674 2.965 10.337 2.965 5.469 0 9.749-1.134 12.839-3.416s4.635-5.234 4.635-8.882c0-3.143-1.039-5.494-3.117-7.065-2.079-1.572-4.936-2.35-8.587-2.35h-14.74zm-1.367-40.079c0 4.55.957 8.131 2.885 10.7 1.928 2.583 4.813 3.867 8.655 3.867 3.651 0 6.385-1.161 8.204-3.498 1.818-2.323 2.734-5.862 2.734-10.631 0-4.77-.943-8.076-2.816-10.249-1.873-2.173-4.731-3.266-8.587-3.266-3.651 0-6.413 1.066-8.286 3.184-1.873 2.132-2.817 5.411-2.817 9.866l.028.027z"
        ></path>
        <path
          fill=""
          d="M230.721 85.57h7.602V41.527h-17.338l9.736-7.598h16.708v51.626h7.603v7.597h-24.311v-7.597.013zm5.018-67.724c0-2.131.588-3.771 1.75-4.933 1.162-1.161 2.762-1.749 4.785-1.749 1.928 0 3.501.588 4.718 1.75 1.217 1.16 1.818 2.705 1.818 4.632 0 2.022-.601 3.62-1.818 4.782s-2.844 1.75-4.868 1.75c-2.024 0-3.473-.588-4.635-1.75-1.162-1.161-1.75-2.65-1.75-4.482z"
        ></path>
        <path
          fill=""
          d="M295.203 90.885c-4.867 2.528-10.173 3.799-15.956 3.799-8.204 0-14.685-2.637-19.444-7.898-4.758-5.261-7.137-12.804-7.137-22.63 0-9.825 2.502-17.682 7.52-23.312 5.018-5.616 11.527-8.43 19.526-8.43 5.565 0 10.733 1.16 15.491 3.497v14.731h-8.053v-9.265c-2.229-.915-4.964-1.366-8.204-1.366-5.675 0-9.872 1.803-12.607 5.384-2.734 3.594-4.102 9.292-4.102 17.08 0 8.295 1.463 14.43 4.403 18.366 2.94 3.95 7.192 5.917 12.757 5.917 5.565 0 10.733-1.366 15.806-4.1V90.886zM363.775 93.919h-8.655L343.115 58.84h-.301l-12.456 35.078h-8.656L304.843 41.54h-6.836v-7.597H320.8v7.597h-6.686l12.456 40.694h.301l12.456-34.012-2.283-6.682h-7.138v-7.597h24.311v7.597h-8.204l13.974 40.694h.301l12.908-40.694h-6.837v-7.597h22.793v7.597h-7.602L363.775 93.92zM392.242 38.344c6.987-3.95 14.125-5.917 21.426-5.917 6.276 0 11.117 1.448 14.508 4.331 3.391 2.884 5.086 7.461 5.086 13.747v35.078h7.602v7.598h-15.806l-.451-6.833-.301-.15c-4.868 5.671-10.843 8.5-17.925 8.5-5.265 0-9.449-1.544-12.539-4.633-3.09-3.088-4.635-7.01-4.635-11.765 0-6.382 2.762-11.137 8.286-14.28 5.524-3.13 13.55-4.7 24.078-4.7h2.585v-8.965c0-3.744-.889-6.395-2.653-7.966-1.777-1.572-4.731-2.35-8.888-2.35-4.963 0-9.119.805-12.456 2.431v8.2h-7.903V38.37l-.014-.027zm28.263 27.48c-6.987 0-12.361.888-16.107 2.65-3.747 1.777-5.62 4.88-5.62 9.334 0 3.238.916 5.589 2.735 7.065 1.818 1.462 4.157 2.2 6.987 2.2 6.071 0 11.294-2.474 15.642-7.434V65.824h-3.651.014zM468.114 93.919h-8.655L441.835 41.54h-6.837v-7.597h22.793v7.597h-6.686l13.222 40.694h.301l13.673-40.694h-6.837v-7.597h22.794v7.597h-7.603L468.128 93.92h-.014zM535.483 81.77v8.2c-5.073 3.142-10.994 4.714-17.776 4.714-7.998 0-14.261-2.678-18.759-8.049-4.512-5.356-6.755-12.858-6.755-22.465 0-9.606 2.379-17.682 7.138-23.312 4.758-5.616 10.733-8.431 17.925-8.431 5.866 0 10.638 2.323 14.275 6.983C535.182 44.07 537 50.697 537 59.306v4.7h-35.399c.205 7.092 1.599 12.6 4.183 16.548 2.585 3.95 6.714 6.027 12.388 6.232 6.276 0 12.046-1.668 17.324-5.015h-.013zm-7.603-25.047c0-5.767-1.066-9.99-3.186-12.681-2.133-2.678-5.113-4.018-8.969-4.018-3.856 0-6.891 1.394-9.421 4.182-2.529 2.787-4.047 6.955-4.553 12.53h26.129v-.013z"
        ></path>
        <path
          fill="#000"
          d="M37.916 55.138c11.116 0 20.127-9.006 20.127-20.115 0-11.109-9.011-20.115-20.127-20.115s-20.127 9.006-20.127 20.115c0 11.11 9.011 20.115 20.127 20.115z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_10_106">
          <path fill="#fff" d="M0 0H537V122H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ARXLogo;
