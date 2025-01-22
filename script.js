document.getElementById('loginBtn').addEventListener('click', () => {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'none';
});

document.getElementById('showSignup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Login Form Handler
document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple admin check - in real application, this should be handled securely
    if (email === 'admin@example.com' && password === 'admin') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'grid';
        document.getElementById('uploadSection').style.display = 'block';
        document.getElementById('assessmentSection').style.display = 'block';
    }
});

// File Upload Handling
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const uploadedFiles = document.getElementById('uploadedFiles');

dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.background = '#f0f0f0';
});

dropZone.addEventListener('dragleave', () => {
    dropZone.style.background = 'white';
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.background = 'white';
    handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', () => {
    handleFiles(fileInput.files);
});

function handleFiles(files) {
    Array.from(files).forEach(file => {
        const fileDiv = document.createElement('div');
        fileDiv.innerHTML = `
            <p><i class="fas fa-file"></i> ${file.name}</p>
            <div class="progress-bar"></div>
        `;
        uploadedFiles.appendChild(fileDiv);
    });
}

// Assessment Handler
function submitAssessment() {
    alert('Assessment submitted successfully!');
}