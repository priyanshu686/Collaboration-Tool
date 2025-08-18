import '../src/App.css';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate ("/login")
    }
    return(
        <>
            <div className='home_wrapper'>
                <div className='home_container'>
                    <h1 className='text_gradient'>Build. Collaborate. Ship faster.</h1>
                    <p className='home_container_p1'>Connect with developers, manage tasks, and ship projects together. The ultimate collaboration platform for development teams.</p>
                    
                    <div id='home_container_btn_div'>
                        <button onClick={handleLogin} id='gradient_background_btn'>Get started for free ➡️</button>
                        <a href="#why_us"><button id='no_background_btn'>More about DevSync</button></a>
                    </div>

                    <img className='home_container_main_img' src="../src/assets/WhatsApp Image 2025-08-16 at 07.27.27_fce6a034.jpg" alt="" />

                    <h2 id='why_us'>Why Choose DevCollab?</h2>
                    <p className='home_container_p2'>Everything you need to manage development projects and collaborate effectively with your team.</p>

                    <div className='why_us_container'>

                        <div className='why_us_card'>
                            <div id='div_div'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6 text-primary-foreground" data-lov-id="src/components/Landing.tsx:69:16" data-lov-name="Users" data-component-path="src/components/Landing.tsx" data-component-line="69" data-component-file="Landing.tsx" data-component-name="Users" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-primary-foreground%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
                            <h3 className='font-bold'>Team Roles</h3>
                            <p>Organize your team with Admin, Product Manager, and Member roles for clear project structure.</p>
                        </div>

                        <div className='why_us_card'>
                            <div id='div_div'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check-big h-6 w-6 text-primary-foreground" data-lov-id="src/components/Landing.tsx:81:16" data-lov-name="CheckSquare" data-component-path="src/components/Landing.tsx" data-component-line="81" data-component-file="Landing.tsx" data-component-name="CheckSquare" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-primary-foreground%22%7D"><path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"></path><path d="m9 11 3 3L22 4"></path></svg></div>
                            <h3 className='font-bold'>Task Management</h3>
                            <p>Assign, track, and complete tasks with powerful project management tools built for developers.</p>
                        </div>

                        <div className='why_us_card'>
                            <div id='div_div'><i class="fa-regular fa-comment"></i></div>
                            <h3 className='font-bold'>Developer Collaboration</h3>
                            <p>Chat, comment on code, share files, and collaborate in real-time with your development team.</p>
                        </div>

                        <div className='why_us_card'>
                            <div id='div_div'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column h-6 w-6 text-primary-foreground" data-lov-id="src/components/Landing.tsx:105:16" data-lov-name="BarChart3" data-component-path="src/components/Landing.tsx" data-component-line="105" data-component-file="Landing.tsx" data-component-name="BarChart3" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-primary-foreground%22%7D"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
                            <h3 className='font-bold'>Project Dashboard</h3>
                            <p>Get a complete overview of your projects with analytics, progress tracking, and insights.</p>
                        </div>

                    </div>



                    <h2>How It Works?</h2>
                    <p className='home_container_p2'>Get started in minutes and ship your first project faster than ever.</p>

                    <div className='how_works_container'>

                        <div className='how_works_card'>
                            <div id='div_div'>1</div>
                            <h3 className='font-bold text-[1.1rem]'>Create Account</h3>
                            <p>Sign up for free and set up your developer profile in seconds.</p>
                        </div>

                        <div className='how_works_card'>
                            <div id='div_div'>2</div>
                            <h3 className='font-bold text-[1.1rem]'>Join/Create Project</h3>
                            <p>Start a new project or join an existing team to begin collaborating.</p>
                        </div>

                        <div className='how_works_card'>
                            <div id='div_div'>3</div>
                            <h3 className='font-bold text-[1.1rem]'>Assign & Complete Tasks</h3>
                            <p>Break down your project into manageable tasks and track progress.</p>
                        </div>

                        <div className='how_works_card'>
                            <div id='div_div'>4</div>
                            <h3 className='font-bold text-[1.1rem]'>Ship Projects</h3>
                            <p>Deploy your completed projects and celebrate with your team.</p>
                        </div>

                    </div>


                    <h2>Join the Developer Community</h2>
                    <p className='home_container_p3'>Join hundreds of developers teaming up to build real projects together. From side projects to startups, we're building the future of collaborative development.</p>

                    <div id='home_container_btn_div' className='mb-20'>
                        <button onClick={handleLogin} id='gradient_background_btn'>Start Building Today</button>
                        <button id='no_background_btn'>Browse Projects</button>
                    </div>


                </div>
            </div>
        </>
    );
}