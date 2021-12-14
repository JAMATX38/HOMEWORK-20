import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/JAMATX38"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/jaime-martinez-592b821b1"
    },
    {
      name: "fab fa-twitter",
      link: "https://twitter.com/"
    },
    {
      name: "fab fa-facebook-f",
      link: "https://www.facebook.com/profile.php?id=100073917406375"
    },
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
