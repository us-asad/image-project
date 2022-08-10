export const Logo = props => (
  <svg
    width={80}
    height={30}
    fill={props.color}
    stroke={props.color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M.202 21.215V.205h3.255v21.01H.202ZM16.476 21.214v-8.149c0-1.146-.313-2.1-.939-2.864-.626-.764-1.44-1.146-2.504-1.146s-1.877.382-2.566 1.146c-.626.763-1.001 1.718-1.001 2.864v8.15H6.399V6.38h2.816l.188 1.973c.376-.764.939-1.337 1.69-1.655.751-.382 1.502-.51 2.379-.51 2.315 0 3.818 1.02 4.569 2.993 1.064-1.974 2.754-2.929 5.007-2.929 2.003 0 3.505.573 4.57 1.783 1.063 1.21 1.564 2.865 1.564 5.03v8.212h-3.067v-8.213c0-1.146-.25-2.1-.814-2.864-.563-.764-1.377-1.083-2.378-1.083-1.064 0-1.94.382-2.566 1.146-.626.764-1.002 1.72-1.002 2.865v8.149h-2.88v-.064ZM43.516 6.381h2.941v14.77h-2.879l-.125-2.42c-.438.892-1.127 1.592-2.128 2.102-1.002.509-1.94.7-2.88.7-2.19 0-3.943-.637-5.382-2.037-1.377-1.4-2.066-3.31-2.066-5.73 0-2.42.689-4.265 2.128-5.666 1.44-1.4 3.193-2.037 5.383-2.037 1.064 0 2.003.254 2.942.7.876.51 1.565 1.146 2.066 1.974V6.38Zm-8.2 3.883c-.876.892-1.377 2.101-1.377 3.566 0 1.464.438 2.674 1.377 3.565.876.891 2.003 1.337 3.38 1.337.876 0 1.627-.191 2.316-.51.688-.382 1.19-.827 1.565-1.4s.626-1.21.75-1.91c.189-.7.189-1.4 0-2.1a8.64 8.64 0 0 0-.75-1.91c-.313-.574-.877-1.02-1.565-1.401-.689-.382-1.44-.51-2.316-.51-1.377-.063-2.504.382-3.38 1.274Z"
        strokeWidth={0.7}
      />
      <path d="m61.605 4.98 2.19 1.72-1.752 2.1c1.189 1.4 1.752 2.929 1.752 4.584 0 1.337-.313 2.483-1.001 3.501-.626 1.019-1.627 1.72-2.88 2.228 2.567.892 3.819 2.483 3.819 4.839 0 1.91-.751 3.374-2.316 4.456C59.852 29.491 58.037 30 55.97 30c-2.378 0-4.318-.573-5.695-1.783-1.378-1.21-2.066-2.8-2.004-4.838h3.068c-.063 1.082.375 1.974 1.314 2.61.939.637 2.003.955 3.317.955 1.252 0 2.316-.255 3.255-.764.939-.51 1.377-1.273 1.377-2.228 0-1.019-.438-1.783-1.252-2.356-.813-.573-1.94-.827-3.317-.827-2.379 0-4.256-.637-5.696-1.974-1.44-1.337-2.128-3.12-2.128-5.411 0-2.356.751-4.138 2.316-5.475 1.565-1.337 3.38-1.974 5.57-1.974 1.628 0 2.942.319 3.944 1.019l1.565-1.974Zm-8.951 5.03c-.939.764-1.377 1.91-1.377 3.374 0 1.4.438 2.546 1.377 3.31.939.828 2.066 1.21 3.443 1.21 1.377 0 2.503-.446 3.38-1.273.876-.828 1.314-1.91 1.314-3.247 0-1.4-.438-2.483-1.377-3.31-.94-.828-2.003-1.21-3.317-1.21-1.377 0-2.504.382-3.443 1.146Z" />
      <path
        d="M67.989 14.976c.125 1.146.626 2.037 1.502 2.673.877.7 1.94 1.02 3.255 1.02.814 0 1.565-.128 2.378-.447.814-.318 1.44-.7 1.816-1.146l2.002 1.974c-.75.828-1.627 1.4-2.816 1.846a9.401 9.401 0 0 1-3.443.637c-2.378 0-4.256-.7-5.696-2.101-1.44-1.4-2.128-3.31-2.128-5.73 0-2.228.689-4.138 2.129-5.538 1.44-1.401 3.254-2.165 5.508-2.165 2.44 0 4.318.764 5.695 2.292 1.377 1.528 1.878 3.756 1.628 6.685h-11.83Zm8.888-2.61c-.063-1.147-.5-2.038-1.252-2.61-.75-.637-1.815-.956-3.004-.956-1.127 0-2.128.319-2.942.955-.814.637-1.315 1.528-1.565 2.61h8.763Z"
        strokeWidth={0.7}
      />
      <path d="M56.034 16.185c1.52 0 2.754-1.254 2.754-2.801 0-1.547-1.233-2.802-2.754-2.802s-2.754 1.255-2.754 2.802c0 1.547 1.233 2.8 2.754 2.8ZM31.06 23.76v1.02h1.127v.318H31.06v2.1c0 .256.062.446.125.574.063.127.25.19.5.19.126 0 .314-.063.502-.127l.125.255c-.25.128-.438.191-.626.191-.313 0-.564-.127-.752-.318-.187-.191-.25-.446-.25-.828v-2.1h-.75v-.32h.75v-1.018l.376.064ZM32.812 27.835a1.794 1.794 0 0 1-.5-1.273c0-.51.187-.955.5-1.273.313-.318.751-.51 1.252-.51.5 0 .939.192 1.252.51.313.318.438.828.375 1.464h-3.066c.062.382.187.7.438.955.25.255.563.319.939.319.25 0 .438-.064.688-.128.25-.064.376-.191.5-.382l.251.191c-.188.191-.375.382-.626.51a1.9 1.9 0 0 1-.813.19c-.439-.063-.814-.254-1.19-.573Zm2.63-1.4c0-.446-.126-.764-.376-.955-.25-.255-.564-.382-1.002-.382-.375 0-.688.127-.939.382-.25.255-.438.573-.438.955h2.754ZM37.256 26.244l1.002-1.401h.375l-1.189 1.655 1.315 1.783h-.376l-1.127-1.528-1.126 1.528h-.376l1.315-1.783-1.19-1.655h.376l1.001 1.4ZM39.823 23.76v1.02h1.126v.318h-1.126v2.1c0 .256.062.446.125.574.063.127.25.19.5.19.126 0 .314-.063.501-.127l.126.255c-.251.128-.439.191-.627.191-.313 0-.563-.127-.75-.318a1.435 1.435 0 0 1-.25-.828v-2.1h-.752v-.32h.751v-1.018l.376.064ZM41.325 23.506c.063-.064.125-.064.188-.064.062 0 .125 0 .187.064.063.064.063.128.063.191 0 .064 0 .128-.063.191-.062.064-.125.064-.187.064-.063 0-.125 0-.188-.064s-.063-.127-.063-.19c0-.064 0-.128.063-.192Zm0 1.274v3.5h.313v-3.5h-.313ZM42.827 23.379v4.902h-.313v-4.902h.313ZM43.891 27.835a1.794 1.794 0 0 1-.5-1.273c0-.51.187-.955.5-1.273.313-.318.751-.51 1.252-.51.5 0 .939.192 1.252.51.313.318.438.828.375 1.464h-3.067c.063.382.188.7.438.955s.564.319.94.319c.25 0 .438-.064.688-.128.25-.064.376-.191.5-.382l.251.191c-.188.191-.376.382-.626.51a1.9 1.9 0 0 1-.814.19c-.438-.063-.813-.254-1.189-.573Zm2.629-1.4c0-.446-.125-.764-.376-.955-.25-.255-.563-.382-1.001-.382-.376 0-.689.127-.939.382s-.438.573-.438.955h2.754Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h80v30H0z" />
      </clipPath>
    </defs>
  </svg>
);