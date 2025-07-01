define([
        "jquery", "Magento_Ui/js/modal/modal"
    ], function($){
        var ConfirmationsModal = {
            initModal: function(config, element) {
                $target = $(config.target);
                $target.modal();
                $element = $(element);
                $element.click(function() {
                    $target.modal('openModal');
                });
            }
        };
        return {
            'cmp-modal': ConfirmationsModal.initModal 
        };
    }
);