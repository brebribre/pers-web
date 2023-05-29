import Project from './project'
const projects = [
  { text: 'Enos Landing Page', img: '/images/enos.webp' },
  { text: 'Indonesian Covid-19 Tracker', img: '/images/covid.webp' },
  { text: 'Izy Landing Page', img: '/images/izy.webp' },
]

function Projects(){
    return (<div>
        <div className="container my-24 mx-auto">
            <section className="mb-32 text-gray-800">
                <div className="grid lg:grid-cols-3 gap-6">
                  {projects.map((item, index) => (
                        <Project
                          key={index}
                          img={item.img}
                          text={item.text}
                          href="www.google.com"
                        />
                  ))}
                </div>
            </section>
        </div>

    </div>)
}

export default Projects;