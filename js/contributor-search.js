 let searchContributor = () => {
 input = document.getElementById('search-contributor');
 filter = input.value.toUpperCase();

 const contributor = document.getElementsByClassName("contributor");
 for (i = 0; i < contributor.length; i++) {
        card = contributor[i].getElementsByTagName('h5');
        if (card[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
            contributor[i].style.display = "";
        } else {
            contributor[i].style.display = "none";
        }
    }
  }

  searchContributor();

