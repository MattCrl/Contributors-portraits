define('spinner', function () {
    
    $(document).ready(function(){
        var target = $('#target');
        $(target).fadeOut(5000);
    });
    
    $('#target').loadingOverlay({
        loadingClass: 'loading',            // Class added to `target` while loading
        overlayClass: 'loading-overlay',    // Class added to loading overlay (to be styled in CSS)
        spinnerClass: 'loading-spinner',    // Class added to loading overlay spinner
        iconClass: 'loading-icon',          // Class added to loading overlay spinner
        textClass: 'loading-text',          // Class added to loading overlay spinner
        loadingText: 'loading'              // Text within loading overlay
    });
});