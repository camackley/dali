import "./Home.scss";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function HomePage() {
  const socialMedia = [
    {
      icon: <EmailIcon />,
      url: "mailto:c@cmackley.com?subject=Let's%20Collaborate!",
    },
    {
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/camackley/",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/camackley/",
    },
    {
      icon: <TwitterIcon />,
      url: "https://x.com/camackley",
    },
    {
      icon: <GitHubIcon />,
      url: "https://github.com/camackley",
    },
  ];

  const handleOnClick = () => {
    window.open("http://cv.camackley.com", "_blank");
  };

  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero--image" />
        <div className="home__hero--body">
          <div className="home__hero--body__app-bar">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="home__hero--body__texts">
            <h1>I'm Mackley Carmona</h1>
            <h2>
              Building Scalable Solutions: Empowering Startups and Businesses
              with High-Performance Software
            </h2>
            <div className="btn" onClick={handleOnClick}>
              <FileDownloadIcon />
              Download curriculum vitae
            </div>
            <p className="home__hero--body__texts__contact">
              <a href={socialMedia[0].url}>
                <EmailIcon />
                m@camackley
              </a>
              <a href="tel:+573135432386">
                <LocalPhoneIcon />
                +573135432386
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
