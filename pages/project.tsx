function Project(props:any){

    return (<div>
        <div className="h-64 zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: '50%' }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
            <img src={props.img} className="w-full transition duration-300 ease-linear align-middle" alt="Project 1" />
            <a href={props.href}>
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <div className="flex justify-start items-end h-full">
                  <h5 className="text-lg font-bold text-white m-6">{props.text}</h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
              </div>
            </a>
        </div>
    </div>)
}

export default Project;