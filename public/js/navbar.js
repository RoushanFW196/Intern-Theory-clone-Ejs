function nbar12345(){

    return ` 

  <nav id="navbar">
    <div id="left_div" >
        <div id="humburger" ><img class='btn' src="https://static.thenounproject.com/png/703781-200.png"  /></div>
        <a href="/InternTheory"><img id="navbar_intern_logo" src="https://assets.interntheory.com/creative/logo.png"/></a>
    
        
            <div class="sidebar">
                
            <div id="left_div">
            <div id="humburger" ><img class='btn' src="https://static.thenounproject.com/png/703781-200.png"  /></div>
        
            <a href=""><div><img id="navbar_intern_logo"  src="https://assets.interntheory.com/creative/logo.png" /></div></a>
            
        </div>
                <ul>
                    <li><a href="/InternTheory"><i class="fas fa-home"></i><b>Home</b></a></li>
                <li id="InternshipBtn"><a href="/internships"><i class="fas fa-list"></i><b>Internship</b></a></li>
                <li id="jobsBtn"><a href="/jobs"><i class="fas fa-business-time"></i><b>Jobs</b></a></li>
                <li><a href="/login/company/new"><i class="fas fa-align-justify"></i> <b>Post Internship</b></a></li>
                <li>
                    
                    
                    <a href="#" class="feat-btn"><i class="fas fa-file"></i><b>Courses</b>
                        <span class="fas fa-caret-down first"></span>
                    </a>
                    <ul class="feat-show">
                        <li><a href="/courses"><b>Online Courses</b></a></li>
                        <li><a href="/courses"><b>Class room Training</b></a></li>
                    </ul>
                </li>
                <li><a href="/InternTheory/contact-us"><i class="fas fa-phone-alt"></i><b>Contact us</b></a></li>
                <div class="m"></div>
                <li>
                    <a href="#" class="feat1-btn"> <i class="fas fa-grip-lines"></i><b>Register</b>
                        <span class="fas fa-caret-down"></span>
                    </a>
                    <ul class="feat1-show">
            
                        <li><a href="/register/new"><b>Student</b></a></li>
                        <li><a href="/register/company/new"><b>Company</b></a></li>
                    </ul>
                </li>
                
                <li>
                    <a href="#" class="feat2-btn"><i class="fas fa-user"></i><b>login</b>
                        <span class="fas fa-caret-down"></span>
                    </a>
                    <ul class="feat2-show">
                        <li><a href="/login/new"><b>Student</b></a></li>
                        <li><a href="/login/company/new"><b>Company</b></a></li>
                    </ul>
                </li>
            </ul>  
                
    </div>
    </div>

    <div id="right_div">
        
        <a href="/login/new"><div id="cart_logo" > <img src="https://th.bing.com/th/id/R.69cb559e0456b62034e80c8394fb507b?rik=yj91OtHM42coXQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_171562.png&ehk=eAehWqyyIlXUjbf8TT8YRFrAzSKFeisj8ZI1A%2biwk6g%3d&risl=&pid=ImgRaw&r=0"  >
        </div> </a>

        <button id="signin"><a href="/login/new">SIGN IN</a></button>
            
    </div> 
</nav>`
}



function n12345(id){

    return `
<nav id="navbar">
    <div id="left_div" >
        <div id="humburger" ><img class='btn' src="https://static.thenounproject.com/png/703781-200.png"  /></div>
        <a href="/InternTheory"><img id="navbar_intern_logo" src="https://assets.interntheory.com/creative/logo.png"/></a>
     
    
        
            <div class="sidebar">
                
                <div id="left_div">
                    <div id="humburger" ><img class='btn' src="https://static.thenounproject.com/png/703781-200.png"  /></div>
                
                    <a href=""><div><img id="navbar_intern_logo"  src="https://assets.interntheory.com/creative/logo.png" /></div></a>
                    
                </div>
        
                <div class="a">
                    <div class="b">
                        <img id="profile_img1" >
                    </div>
                    <div class="per_info">
                    <h1 id="name"></h1>
                    <span id = "mail"></span>
                    <span id = "phno"></span>
                    </div>
                </div>
            <ul>
                <li><a href="/login/profile/${id}"><i class="fas fa-th-large"></i><b>Dashboard</b></a></li>
            <li><a href="/login/profile/${id}"><i class="fas fa-user-circle"></i><b>Profile</b></a></li>
            <li id=""><a href="/internships"><i class="fas fa-list"></i><b>Internship</b></a></li>
                <li id="jobsBtn"><a href="/jobs"><i class="fas fa-business-time"></i><b>Jobs</b></a></li>
            <li> <a href="/courses" ><i class="fas fa-file"></i><b>Courses</b></a></li>
            <li><a href="#"><i class="fas fa-dollar-sign"></i><b>Transactions</b></a></li>
            <li><a href="/InternTheory/contact-us"><i class="fas fa-phone-alt"></i><b>Contact us</b></a></li>
            <li><a href="#"><i class="fas fa-folder"></i><b>Start Your Business Today</b></a></li>
            <div class="m"></div>
            <li><a href="#" > <i class="fas fa-lock"></i><b>Change Password</b></a></li>
            <li id="logoutbtn"><a href="#" ><i class="fas fa-arrow-circle-right"></i><b>logout</b></a></li>
        </ul>  
    </div>
</div>
<div id="right_div">
    <a href=""><div  id="notify_icon"><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/notification-1614268-1368970.png" alt="">
    </div></a>
    <a href="/cart?user=${id}"><div id="cart_logo" > <img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png"  >
    </div> </a>
    <a  href=""><div id="user_icon"><img id="profile_img2">
    </div> </a>
        
</div> 
</nav>`
}

function afterLogout(){
        
    document.getElementById("logoutbtn").addEventListener("click",()=>{
        console.log("logout")
        localStorage.removeItem("user_info1");
        window.location.reload();
        window.location.href="/InternTheory"

    })
}

export {n12345,nbar12345 ,afterLogout}