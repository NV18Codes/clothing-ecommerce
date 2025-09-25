import React from 'react';
import { Ruler, Shirt, Users } from 'lucide-react';
import './SizeGuide.css';

const SizeGuide = () => {
  const sizeCharts = {
    men: {
      title: "Men's Size Guide",
      measurements: [
        { size: 'XS', chest: '32-34"', waist: '26-28"', length: '27"' },
        { size: 'S', chest: '34-36"', waist: '28-30"', length: '28"' },
        { size: 'M', chest: '36-38"', waist: '30-32"', length: '29"' },
        { size: 'L', chest: '38-40"', waist: '32-34"', length: '30"' },
        { size: 'XL', chest: '40-42"', waist: '34-36"', length: '31"' },
        { size: 'XXL', chest: '42-44"', waist: '36-38"', length: '32"' }
      ]
    },
    women: {
      title: "Women's Size Guide",
      measurements: [
        { size: 'XS', bust: '32-33"', waist: '24-25"', hips: '34-35"' },
        { size: 'S', bust: '34-35"', waist: '26-27"', hips: '36-37"' },
        { size: 'M', bust: '36-37"', waist: '28-29"', hips: '38-39"' },
        { size: 'L', bust: '38-39"', waist: '30-31"', hips: '40-41"' },
        { size: 'XL', bust: '40-41"', waist: '32-33"', hips: '42-43"' },
        { size: 'XXL', bust: '42-43"', waist: '34-35"', hips: '44-45"' }
      ]
    }
  };

  const measuringTips = [
    {
      icon: <Ruler size={24} />,
      title: "How to Measure",
      description: "Use a flexible measuring tape and measure over your undergarments for the most accurate fit."
    },
    {
      icon: <Shirt size={24} />,
      title: "Chest/Bust",
      description: "Measure around the fullest part of your chest, keeping the tape horizontal."
    },
    {
      icon: <Users size={24} />,
      title: "Waist",
      description: "Measure around your natural waistline, which is typically the narrowest part of your torso."
    }
  ];

  return (
    <div className="size-guide">
      <div className="size-header">
        <div className="container">
          <h1>Size Guide</h1>
          <p>Find your perfect fit with our comprehensive size guide</p>
        </div>
      </div>

      <div className="size-content">
        <div className="container">
          {/* Measuring Tips */}
          <section className="measuring-tips">
            <h2>How to Measure</h2>
            <div className="tips-grid">
              {measuringTips.map((tip, index) => (
                <div key={index} className="tip-card">
                  <div className="tip-icon">{tip.icon}</div>
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Size Charts */}
          <section className="size-charts">
            {Object.entries(sizeCharts).map(([gender, chart]) => (
              <div key={gender} className="size-chart">
                <h2>{chart.title}</h2>
                <div className="chart-container">
                  <table className="size-table">
                    <thead>
                      <tr>
                        <th>Size</th>
                        {gender === 'men' ? (
                          <>
                            <th>Chest</th>
                            <th>Waist</th>
                            <th>Length</th>
                          </>
                        ) : (
                          <>
                            <th>Bust</th>
                            <th>Waist</th>
                            <th>Hips</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {chart.measurements.map((measurement, index) => (
                        <tr key={index}>
                          <td className="size-cell">{measurement.size}</td>
                          <td>{measurement.chest || measurement.bust}</td>
                          <td>{measurement.waist}</td>
                          <td>{measurement.length || measurement.hips}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>

          {/* Additional Info */}
          <section className="size-info">
            <h2>Size Guide Tips</h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>Indian Sizing</h3>
                <p>Our sizes are based on Indian measurements and body types. If you're unsure, we recommend sizing up for a more comfortable fit.</p>
              </div>
              <div className="info-card">
                <h3>Fit Preferences</h3>
                <p>Consider your preferred fit when choosing a size. Our clothes are designed to fit true to size, but personal preference matters.</p>
              </div>
              <div className="info-card">
                <h3>Need Help?</h3>
                <p>Still unsure about sizing? Contact our customer service team for personalized assistance with your measurements.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
