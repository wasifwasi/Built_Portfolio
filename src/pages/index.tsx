// src/pages/index.js
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import ScrollToTop from "../components/ScrollToTop";
import FixSocialIcon from "../components/SocialIcon";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Homes() {
  return (
   
      <div >
{/*         <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Resume />
        <Contact />
        <FixSocialIcon/>
        <ScrollToTop/> */}
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Upgrade | Coming Soon</title>
    <style>
        :root {
            --primary: #2563eb;
            --secondary: #1e40af;
            --accent: #3b82f6;
            --light: #f8fafc;
            --dark: #1e293b;
            --gray: #64748b;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: #f1f5f9;
            color: var(--dark);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
            line-height: 1.6;
        }
        
        .container {
            background-color: white;
            padding: 3rem;
            border-radius: 16px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                        0 10px 10px -5px rgba(0, 0, 0, 0.04);
            max-width: 640px;
            width: 90%;
            position: relative;
            overflow: hidden;
        }
        
        .container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 6px;
            background: linear-gradient(90deg, var(--primary), var(--accent));
        }
        
        .logo {
            width: 48px;
            height: 48px;
            margin-bottom: 1.5rem;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.25rem;
        }
        
        h1 {
            color: var(--dark);
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.25;
        }
        
        p {
            color: var(--gray);
            font-size: 1.125rem;
            margin-bottom: 2rem;
        }
        
        .status {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            margin-bottom: 2rem;
            color: var(--primary);
            font-weight: 500;
        }
        
        .status-indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: var(--primary);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin: 2rem 0;
            text-align: left;
        }
        
        .feature {
            background-color: #f8fafc;
            padding: 1rem;
            border-radius: 8px;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
        }
        
        .feature-icon {
            color: var(--primary);
            font-size: 1.25rem;
        }
        
        .feature-text {
            font-size: 0.875rem;
        }
        
        .feature-text strong {
            color: var(--dark);
            display: block;
            margin-bottom: 0.25rem;
        }
        
        .feature-text span {
            color: var(--gray);
        }
        
        .cta {
            margin-top: 2rem;
        }
        
        .btn {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .contact-link {
            display: inline-block;
            margin-top: 1.5rem;
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
        }
        
        .contact-link:hover {
            color: var(--secondary);
            text-decoration: underline;
        }
        
        @media (max-width: 640px) {
            .container {
                padding: 2rem 1.5rem;
            }
            
            h1 {
                font-size: 1.75rem;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">P</div>
        <h1>Portfolio Upgrade in Progress</h1>
        
        <div class="status">
            <div class="status-indicator"></div>
            <span>Currently working on updates</span>
        </div>
        
        <p>I'm enhancing my portfolio with new projects, improved design, and better performance. The new version will showcase my latest work and skills more effectively.</p>
        
        <div class="features-grid">
            <div class="feature">
                <div class="feature-icon">✨</div>
                <div class="feature-text">
                    <strong>New Design</strong>
                    <span>Modern, clean interface</span>
                </div>
            </div>
            <div class="feature">
                <div class="feature-icon">🚀</div>
                <div class="feature-text">
                    <strong>Performance</strong>
                    <span>Faster loading times</span>
                </div>
            </div>
            <div class="feature">
                <div class="feature-icon">🖼️</div>
                <div class="feature-text">
                    <strong>Projects</strong>
                    <span>Latest case studies</span>
                </div>
            </div>
            <div class="feature">
                <div class="feature-icon">📱</div>
                <div class="feature-text">
                    <strong>Responsive</strong>
                    <span>Better mobile experience</span>
                </div>
            </div>
        </div>
        
        <div class="cta">
            <a href="mailto:contact@example.com" class="btn">
                Contact Me
            </a>
            <a href="mailto:contact@example.com" class="contact-link">
                Need immediate access? Email me
            </a>
        </div>
    </div>

    <script>
        // Simple countdown animation
        document.addEventListener('DOMContentLoaded', function() {
            const features = document.querySelectorAll('.feature');
            features.forEach((feature, index) => {
                setTimeout(() => {
                    feature.style.opacity = '1';
                    feature.style.transform = 'translateY(0)';
                }, index * 150);
            });
        });
    </script>
</body>
</html>
      </div>

  );
}
