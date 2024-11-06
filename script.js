function validateSearch() {
        const searchInput = document.getElementById('searchInput').value.trim();
        if (!searchInput) {
            alert('Please enter a search term.');
            return false;
        }

        // Add your logic here to check if the post exists
        // For example, you can redirect to a search results page or display a message
        // For now, we'll assume no posts are found
        alert('No posts found for "' + searchInput + '".');
        return false; // Prevents form submission
    }



    document.addEventListener('DOMContentLoaded', function() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.header nav');

        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    });


    document.getElementById('menu-toggle').addEventListener('click', function() {
        const navMenu = document.getElementById('nav-menu');
        const searchBar = document.getElementById('search-bar');
        
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
            searchBar.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            searchBar.style.display = 'flex';
        }
    });
    
    document.getElementById('search-icon').addEventListener('click', function() {
        const searchBar = document.getElementById('search-bar');
        
        if (searchBar.style.display === 'flex') {
            searchBar.style.display = 'none';
        } else {
            searchBar.style.display = 'flex';
        }
    });

    
    document.querySelector('.nav-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.header nav').classList.toggle('active');
    });


    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });