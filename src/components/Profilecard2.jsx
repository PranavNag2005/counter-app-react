function ProfileCard2({name,age,location,skills,featured}){
    return (
        <>
        <div className="profile-card">
            {featured && <span>⭐️</span>}
            <h2>name: {name}</h2>
            <p>age: {age}</p>
            <p>location: {location}</p>
        </div>
        <div className="profile-card">
            <h2>skills:</h2>
            {skills && skills.length > 0 ? (
                <ul>
                    {skills.map(skill=> <li>{skill}</li>)}
                </ul>
            ):(<h2>No skill found</h2>)}</div>
      
        </>
    )
}

export default ProfileCard2;