import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; // Make sure this path is correct

const PatternSection = () => {
  useEffect(() => {
    const stats = [
      { id: "stat1", target: 30, duration: 2000 },
      { id: "stat2", target: 300, duration: 2000 },
      { id: "stat3", target: 8, duration: 2000 }
    ];

    let counted = false;

    const updateStats = () => {
      if (!counted) {
        stats.forEach(stat => {
          let count = 0;
          const increment = stat.target / (stat.duration / 100);

          const updateStat = () => {
            if (count < stat.target) {
              count += increment;
              const displayValue = stat.id === "stat1" || stat.id === "stat3" ? count.toFixed(0) : count.toFixed(1);
              document.getElementById(stat.id).innerText = displayValue;
              requestAnimationFrame(updateStat);
            }
          };
          updateStat();
        });
        counted = true;
      }
    };

    const handleScroll = () => {
      const section = document.querySelector('.patterns-section');
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        updateStats();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="patterns-section">
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <h1 className="text-center display-5">Case Studies and Patterns</h1>
            <div className="row text-center">
              <div className="col-md-4 col-lg-4 mb-5 mb-lg-0">
                <h2 id="stat1">0</h2>
                <p>Years of Experience</p>
              </div>
              <div className="col-md-4 col-lg-4 mb-5 mb-lg-0">
                <h2 id="stat2">0</h2>
                <p>Successful Cases</p>
              </div>
              <div className="col-md-4 col-lg-4 mb-5 mb-lg-0">
                <h2 id="stat3">0</h2>
                <p>Received Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatternSection;
