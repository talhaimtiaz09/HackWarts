// Create the navigation container
const nav = document.createElement('nav');
nav.classList.add('flex', 'justify-between', 'text-teal-500', 'bg-white', 'items-center', 'border-b-2', 'border-teal-500');

// Create the logo and append it to the navigation container
const logo = document.createElement('span');
logo.classList.add('mx-4', 'py-2', 'font-bold', 'text-xl');
const logoLink = document.createElement('a');
logoLink.href = '/';
logoLink.innerHTML = 'Strate<span class="text-slate-500">GIK</span>';
logo.appendChild(logoLink);
nav.appendChild(logo);

// Create the menu icon and append it to the navigation container
const menuIcon = document.createElement('img');
menuIcon.src = './icons/menuIcon.svg';
menuIcon.alt = 'hamburger-icon';
menuIcon.id = 'menuIcon';
menuIcon.classList.add('w-6', 'm-4', 'md:hidden', 'z-30');
nav.appendChild(menuIcon);

// Create the menu items and append them to the navigation container
const menuItems = document.createElement('ul');
menuItems.setAttribute('data-ul', '');
menuItems.classList.add('md:flex-row', 'md:top-auto', 'md:w-auto', 'bg-slate-50', 'pb-5', 'md:pb-px', 'md:bg-white', '-top-96', 'text-center', 'flex', 'flex-col', 'items-center', 'w-full', 'md:relative', 'fixed', 'z-20');

const homeMenuItem = document.createElement('li');
homeMenuItem.classList.add('li', 'md:my-4', 'mx-6', 'transition-all', 'duration-500', 'hover:bg-teal-100', 'hover:bg-opacity-40', 'md:hover:bg-white', 'hover:text-teal-600', 'hover:translate-x-1', 'md:hover:-translate-y-1', 'md:hover:translate-x-0');
const homeMenuLink = document.createElement('a');
homeMenuLink.href = 'http://localhost:2000/';
homeMenuLink.innerHTML = 'Home';
homeMenuItem.appendChild(homeMenuLink);
menuItems.appendChild(homeMenuItem);

const BooksMenuItem = document.createElement('li');
BooksMenuItem.classList.add('li', 'md:my-4', 'mx-6', 'transition-all', 'duration-500', 'hover:bg-teal-100', 'hover:bg-opacity-40', 'md:hover:bg-white', 'hover:text-teal-600', 'hover:translate-x-1', 'md:hover:-translate-y-1', 'md:hover:translate-x-0');
const BooksMenuLink = document.createElement('a');
BooksMenuLink.href = 'http://localhost:2000/books';
BooksMenuLink.innerHTML = 'Books';
BooksMenuItem.appendChild(BooksMenuLink);
menuItems.appendChild(BooksMenuItem);

const courseListMenuItem = document.createElement('li');
courseListMenuItem.classList.add('li', 'md:my-4', 'mx-6', 'transition-all', 'duration-500', 'hover:bg-teal-100', 'hover:bg-opacity-40', 'md:hover:bg-white', 'hover:text-teal-600', 'hover:translate-x-1', 'md:hover:-translate-y-1', 'md:hover:translate-x-0');
const courseListMenuLink = document.createElement('a');
courseListMenuLink.href = 'http://localhost:2000/courses';
courseListMenuLink.innerHTML = 'courseList';
courseListMenuItem.appendChild(courseListMenuLink);
menuItems.appendChild(courseListMenuItem);

const contributeMenuItem = document.createElement('li');
contributeMenuItem.classList.add('li', 'md:my-4', 'mx-6', 'transition-all', 'duration-500', 'hover:bg-teal-100', 'hover:bg-opacity-40', 'md:hover:bg-white', 'hover:text-teal-600', 'hover:translate-x-1', 'md:hover:-translate-y-1', 'md:hover:translate-x-0');
const contributeMenuLink = document.createElement('a');
contributeMenuLink.href = 'http://localhost:2000/contribute';
contributeMenuLink.innerHTML = 'Contribute';
contributeMenuItem.appendChild(contributeMenuLink);
menuItems.appendChild(contributeMenuItem);

const AboutMenuItem = document.createElement('li');
AboutMenuItem.classList.add('li', 'md:my-4', 'mx-6', 'transition-all', 'duration-500', 'hover:bg-teal-100', 'hover:bg-opacity-40', 'md:hover:bg-white', 'hover:text-teal-600', 'hover:translate-x-1', 'md:hover:-translate-y-1', 'md:hover:translate-x-0');
const AboutMenuLink = document.createElement('a');
AboutMenuLink.href = 'http://localhost:2000/aboutUs';
AboutMenuLink.innerHTML = 'About';
AboutMenuItem.appendChild(AboutMenuLink);
menuItems.appendChild(AboutMenuItem);

// Add other menu items here...

const profileIcon = document.createElement('img');
profileIcon.src = './icons/profileIcon.svg';
profileIcon.alt = 'profileIcon';
profileIcon.classList.add('w-7', 'mx-6', 'ml-2', 'md:block', 'hidden', 'hover:-translate-y-1', 'active:translate-y-1', 'transition-transform', 'duration-700', 'profileIcon');
menuItems.appendChild(profileIcon);


nav.appendChild(menuItems);

// Append the navigation to the page
document.body.appendChild(nav);

document.getElementById('nav').appendChild(nav)



// <nav class="flex justify-between text-teal-500 bg-white items-center border-b-2 border-teal-500">
// <span class="mx-4 py-2 font-bold text-xl">
//   <a href="/">
//     Strate<span class="text-slate-500">GIK</span>
//   </a>
// </span>
// <img id="menuIcon" class="w-6 m-4 md:hidden z-30" src="./icons/menuIcon.svg" alt="hamburger-icon">
// <ul data-ul class="md:flex-row md:top-auto md:w-auto bg-slate-50 pb-5 md:pb-px md:bg-white -top-96 text-center flex flex-col items-center w-full md:relative fixed z-20">
  
//   <% if(user[0] != undefined){ %>
//     <li class="md:hidden cursor-default select-none li text-slate-500 font-bold ml-2"><%= user[0].userName %></li>
//     <%}%>
//     <li class="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/">Home</a></li>
//   <li class="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/courses">Course List</a></li>
//   <li class="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/contribute">Contribute</a></li>
//   <!-- <li class="li md:my-4 mx-6 transition-all duration-500 hover:bg-teal-100 hover:bg-opacity-40 md:hover:bg-white hover:text-teal-600 hover:translate-x-1 md:hover:-translate-y-1 md:hover:translate-x-0"><a href="/aboutUs">About</a></li> -->
//   <% if(user[0] != undefined){ %>
//     <li class="hidden cursor-default select-none md:inline-block li text-slate-500 font-bold ml-2"><%= user[0].userName %></li>
//   <%}%>
//   <div class="flex flex-col md:items-center w-full md:w-auto md:absolute md:overflow-hidden md:top-14 md:right-0 bg-white rounded-b-md nav-drop-down md:max-h-0 transition-[max-Height] duration-1000">
//     <% if(user[0] == undefined){ %>
      
//       <li class="hover:bg-teal-100 hover:bg-opacity-40 hover:translate-x-1 li md:py-4 md:px-6 md:pr-24 transition-all duration-500 hover:text-teal-600"><a href="/users/signIn">Sign In</a></li>
//       <li class="hover:bg-teal-100 hover:bg-opacity-40 hover:translate-x-1 li md:py-4 md:px-6 md:pr-24 transition-all duration-500 hover:text-teal-600"><a href="/users/signUp">Sign Up</a></li>
//       <% } %>
//       <% if(user[0] != undefined){ %>
//         <!-- <li class="hover:bg-teal-100 hover:bg-opacity-40 hover:translate-x-1 li md:py-4 px-6 md:pr-24 transition-all duration-500 hover:text-teal-600">Hello <%= user[0].userName %></li> -->
//         <% if(user[0].dashboardAccess === true){ %>
//           <li class="hover:bg-teal-100 hover:bg-opacity-40 hover:translate-x-1 li md:py-4 px-6 md:pr-24 transition-all duration-500 hover:text-teal-600"><a href="/xlzjoorD6C">Dashboard</a></li>
//           <% } %>
//           <li class="hover:bg-teal-100 hover:bg-opacity-40 hover:translate-x-1 li md:py-4 px-6 md:pr-24 transition-all duration-500 hover:text-teal-600"><a href="/signingOut">Sign Out</a></li>
//           <% } %>
//         </div>
//           <img id="profileIcon" class="w-7 mx-6 ml-2 md:block hidden hover:-translate-y-1 active:translate-y-1 transition-transform duration-700 profileIcon" src="./icons/profileIcon.svg" alt="profileIcon">

// </ul>
// </nav>