mainApp.controller("studentController",function($scope)
                  {
                    $scope.student=
                    {
                      firstname:"Riyan",
                      lastname:"Singh",
                      fees:600,

                      fullname:function()
                      {
                        var studentObject=$scope.student;
                        return studentObject.firstname+" "+studentObject.lastname;
                      }

                    };
                  });

                
