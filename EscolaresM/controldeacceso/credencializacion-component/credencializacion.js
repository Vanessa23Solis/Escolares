var credencializacion= angular.module('credencializacion', []);

credencializacion.controller('credencializacioncontroller', function ($scope){
     $scope.selection={
          options:[
               {id:'1', name:'--Selecciona un Diseño--'},
               {id:'2', name:'Demo'}
          ],
          A_options:{id:'1', name:'--Selecciona un Diseño--'},
     }

     $scope.foreigner={
          options:[
               {id:'1', name:'--Selecciona--'},
               {id:'2', name:'Si'},
               {id:'3', name:'No'}
          ],
          A_options:{id:'1', name:'--Selecciona--'}
     }

     $scope.grade={
          options:[
               {id:'1', name:'--Grado--'},
               {id:'2', name:'1'},
               {id:'3', name:'2'},
               {id:'4', name:'3'},
               {id:'5', name:'4'},
               {id:'6', name:'5'},
               {id:'7', name:'6'},
               {id:'8', name:'7'},
               {id:'9', name:'8'},
               {id:'10', name:'9'},
               {id:'11', name:'10'}
          ],
          A_options:{id:'1', name:'--Grado--'}
     }

     $scope.specialty={
          options:[
               {id:'1', name:'--Carrera--'},
               {id:'2', name:'ANIMADOR'},
               {id:'3', name:'ARH'},
               {id:'4', name:'ASR'},
               {id:'5', name:'CONFECCION'},
               {id:'6', name:'DISEÑO GRAFICO'},
               {id:'7', name:'INGENERIA EN SOFTWARE'},
               {id:'8', name:'INGENERIA EN MECATRONICA'},
               {id:'9', name:'LICENCIANTURA EN TRABAJO SOCIAL'},
               {id:'10', name:'MECATRONICA'},
               {id:'11', name:'PRUEBA'} 
          ],
          A_options:{id:'1', name:'--Carrera--'}
     }

     $scope.shift={
          options:[
               {id:'1', name:'--Turno--'},
               {id:'2', name:'Matutino'},
               {id:'3', name:'Vespertino'}
          ],
          A_options:{id:'1', name:'--Carrera--'}
     }

     $scope.perid={
          options:[
               {id:'1', name:'JUL 017 - ENE 2018'},
               {id:'2', name:'Si'},
               {id:'3', name:'No'}
          ], 
          A_options:{id:'1', name:'JUL 017 - ENE 2018'}
     }

     $scope.students = [
          { id: '1', name: 'David Victor', lastname: 'Berumen Ramirez',view:'invisible', identification: "ID-16071", rol: "ALUMNO", type:'DEMO0831902', carrer:'1A Ingeneria en software TV ',photo: 'https://res.cloudinary.com/cdn-dh14/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1645716203/escolares/escuelas/9/alumnos/lxa7obvj45bprisg1tmu.jpg' },
          { id: '2', name: 'David Victor', lastname: 'Berumen Ramirez',view:'invisible', identification: "ID-16071", rol: "ALUMNO", type:'DEMO0831902', carrer:'1A Ingeneria en software TV ',photo: 'https://res.cloudinary.com/cdn-dh14/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1645716203/escolares/escuelas/9/alumnos/lxa7obvj45bprisg1tmu.jpg' },
          {id: '3', name:'Gabriel', lastname:'Ibarra Martinez', view:'invisible', identification: "ID-16071", rol: "ALUMNO", type:'DEMO0831902', carrer:'1A Ingeneria en software TV ',photo: 'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1564526113/escolares/escuelas/9/alumnos/tmkv21uyqmbp1gblohwm.jpg'},
          {id:'4', name:'Lilith', lastname:'Lopez Diaz', view:'invisible', identification:'ID-16069', rol:'Alumno', type:'ABC123', carrer:'4D Ingeneria en software TV', photo:'https://res.cloudinary.com/cdn-dh13/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1626717200/escolares/escuelas/9/alumnos/y7kvgwvt7gvkjjuwqwse.jpg'},
          {id:'5', name:'Alicia', lastname:'Zapata Bravo', view:'invisible', identification:'ID-16072', rol:'Alumno', type:'1000001', carrer:'3B ARH TM', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1565040558/escolares/escuelas/9/alumnos/lmk6mucpq2n12k8jke8c.jpg'},
          {id:'6', name:'Gustavo', lastname:'Garcia Zaragoza', view:'invisible', identification:'ID-16244', rol:'Alumno', type:'1000002', carrer:'1A Ingeneria en software TV', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'7', name:'Alicia', lastname:'Murillo Amador', view:'invisible', identification:'ID-16245', rol:'Alumno', type:'DEMO0800517', carrer:'3B ISW TV', photo:'https://res.cloudinary.com/cdn-dh16/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1626806111/escolares/escuelas/9/alumnos/wj17gdn5s9oyg8d8dkaj.jpg'},
          {id:'8', name:'Rick', lastname:'Martinez Flores', view:'invisible', identification:'ID-16430', rol:'Alumno', type:'DEMO0803098', carrer:'3B ISW TV', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'9', name:'Erika', lastname:'Zavala Maturino', view:'invisible', identification:'ID-16441', rol:'Alumno', type:'DEMO0644519', carrer:'1A Ingeneria en software TV', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'10', name:'Mildred', lastname:'Sosa Garcia', view:'invisible', identification:'ID-16452', rol:'Alumno', type:'DEMO0242816', carrer:'1A ISW TM', photo:'https://res.cloudinary.com/cdn-dh04/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1567607094/escolares/escuelas/9/alumnos/oqgy1nmrj6gigr1lidrh.jpg'},
          
          
          
        ]
     $scope.students_credencial=[
          {id:'1', name: 'Victor David Berumen Ramirez ', create: '2022-02-22 22:03:28', update: '2022-02-24 09:23:24', id_student:'1', photo:'https://res.cloudinary.com/cdn-dh14/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1645716203/escolares/escuelas/9/alumnos/lxa7obvj45bprisg1tmu.jpg' },
          {id:'2', name:'Victor David Berumen Ramirez', create:'2022-10-17 20:33:18' ,update:'2022-10-17 22:20:53', id_student:'1', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'3', name:'Victor David Berumen Ramirez', create:'2021-10-04 09:00:53' ,update:'2022-02-22 22:34:16', id_student:'1', photo:'https://res.cloudinary.com/cdn-dh14/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1645590855/escolares/escuelas/9/alumnos/hvcv44ggcr9yuawgwsuh.jpg'},

          {id:'4', name:'Victor David Berumen Ramirez', create:' 2019-07-30 17:30:21' ,update:'2020-09-28 13:14:38', id_student:'2', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1564526113/escolares/escuelas/9/alumnos/tmkv21uyqmbp1gblohwm.jpg'},
            
          {id:'5', name:'Gabriel Ibarra Martinez', create:' 2019-07-30 17:30:21' ,update:'2020-09-28 13:14:38', id_student:'3', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1564526113/escolares/escuelas/9/alumnos/tmkv21uyqmbp1gblohwm.jpg'},
            

          {id:'6', name: 'Lilith Lopez Diaz ', create: '2022-02-22 22:03:28', update: '2022-02-24 09:23:24', id_student:'4', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1565040558/escolares/escuelas/9/alumnos/lmk6mucpq2n12k8jke8c.jpg' },

          
          {id:'7', name: 'Alicia Zapata Bravo', create: '2022-02-22 22:03:28', update: '2022-02-24 09:23:24', id_student:'4', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1565040558/escolares/escuelas/9/alumnos/lmk6mucpq2n12k8jke8c.jpg' },
     ]

     $scope.brillo={
          options:[
          {id:'1', name:'Original'},
          {id:'2', name:'10%'},
          {id:'3', name:'15%'},
          {id:'4', name:'25%'},
          {id:'5', name:'35%'},
          {id:'6', name:'45%'},
          {id:'7', name:'55%'},
          {id:'8', name:'65%'},
          {id:'9', name:'75%'},
          {id:'10', name:'85%'},
          {id:'11', name:'95%'},
          {id:'12', name:'Alto%'},
     ],
     A_options:{id:'1', name:'Original'}
     }

     $scope.printer={
        options:[
        {id:'1', name:'--Selecciona una opción--'},
        {id:'2', name:'Duplex'},
        {id:'3', name:'Frontal'},
        {id:'4', name:'Reverso'},
        {id:'5', name:'Frontal'},
        {id:'6', name:'Reverso'},
        {id:'7', name:'Frontal'},
        {id:'8', name:'Reverso'},
   ],
   A_options: {id:'1', name:'--Selecciona una opción--'},
   }

   $scope.status={
        options:[
        {id:'1', name:'INACTIVA'},
        {id:'2', name:'ACTIVA'},
        {id:'3', name:'BAJA'},
        {id:'4', name:'ADEUDO'},
       
    ],
    A_options: {id:'1', name:'INACTIVA'},
    }

    $scope.profile={
        options:[
            {id:'1', name:'--Selecciona el tipo--'},
            {id:'2', name:'Aspirante'},
            {id:'3', name:'Alumno'},
            {id:'4', name:'Egresado'},
           {id:'5', name:'Externo'}
        ],
        A_options: {id:'1', name:'--Selecciona el tipo--'},
    }

    $scope.statuss={
        options:[
        {id:'1', name:'--Selecciona el estatus--'},
        {id:'2', name:'ACTIVA'},
        {id:'3', name:'Suspendido'},
        {id:'4', name:'Baja'},
       
    ],
    A_options: {id:'1', name:'--Selecciona el estatus--'},
    }

    $scope.registeredd={
        options:[
            {id:'1', name:'--Selecciona el estatus--'},
            {id:'2', name:'Si'},
            {id:'3', name:'No'},
           
        ],
        A_options: {id:'1', name:'--Selecciona el estatus--'},
    }
     
    $scope.schoolperiod={
        options:[
            {id:'1', name:'--Selecciona el ciclo escolar--'},
            {id:'2', name:'Agosto 2022 - Enero 2023'},
            {id:'3', name:'Febrero - Julio 2022'}, 
            {id:'4', name:'Agosto 2021 - Enero 2022'},
            {id:'5', name:'Febrero - Julio 2021'}, 
            {id:'6', name:'Agosto 2020 - Enero 2021'}, 
            {id:'7', name:'Febrero - Julio 2020'}, 
            {id:'8', name:'Agosto 2019 - Enero 2020'}, 
            {id:'9', name:'Febrero - Julio 2019'}, 
            {id:'10', name:'Agosto 2018 - Enero 2019'} 
        ],
        A_options:{id:'1', name:'--Selecciona el ciclo escolar--'},

    }

    $scope.Foraneo={
        options:[
            {id:'1', name:'--Selecciona si eres foraneo--'},
            {id:'2', name:'Si'},
            {id:'3', name:'No'}, 
        ],
        A_options:{id:'1', name:'--Selecciona si eres foraneo--'},

    }
          $scope.ChangeView = function(id) {
               for (let i = 0; i < $scope.students.length; i++) {
                   $scope.students[id].view = 'visible';
                   if ($scope.students[i].id != (id + 1)) {
                       $scope.students[i].view = 'invisible';
                   }
               }
           }

           $scope.view_camera = false;
           $scope.view_snapshot = 'invisible p-0';
           $scope.camera_error = '';
       
    


           const self = this;
           $scope.cameraOn = () => {
               $scope.view_camera = true;
               $scope.no_click = ' pe-none';
       
               navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
                   navigator.webkitGetUserMedia ||
                   navigator.mozGetUserMedia ||
                   navigator.msGetUserMedia);
               navigator.getMedia({
                   video: {
                       width: 640,
                       height: 480
                   }
               }, function(stream) {
                   self.webCamPermissions(stream); // Tiene webcam
               }, function() {
                   self.unavalable = false; // No tiene webcam
                   console.log('La camara no esta disponible o no tiene permisos')
       
                   $scope.camera_error = 'La camara no esta disponible o no tiene permisos';
               });
           }
       
           self.webCamPermissions = stream => {
               self.canvas = document.querySelector('#canvas');
               self.context = self.canvas.getContext('2d');
               self.video = document.getElementById('camera_video');
               if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                   self.video.srcObject = stream;
                   self.video.play();
                   self.unavalable = true;
               } else if (navigator.getUserMedia) { // Standard
                   self.video.src = stream;
                   self.video.play();
                   self.unavalable = true;
               } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
                   self.video.src = window.webkitURL.createObjectURL(stream);
                   self.video.play();
                   self.unavalable = true;
               } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
                   self.video.srcObject = stream;
                   self.video.play();
                   self.unavalable = true;
               }
           }
       
           $scope.getSnapshot = () => {
               if ($scope.view_camera == true && $scope.camera_error == '') {
                   $scope.view_snapshot = '';
       
                   self.context.drawImage(self.video, 0, 0, 640, 480);
                   self.context.fillStyle = "rgba(255,255,255,1)";
                   self.img = self.canvas.toDataURL("image/png"); //base 64
                   //console.log(self.img)
                   document.getElementById("Snapshot").setAttribute(
                       'src', self.img
                   );
               }
           }
       
           $scope.cameraOff = () => {
               if (self.unavalable) {
                   $scope.view_camera = false;
                   $scope.view_snapshot = 'invisible p-0';
                   $scope.no_click = '';
       
                   self.video.srcObject.getTracks()[0].stop()
               }
           }
       
           self.dataURLtoFile = (dataurl, filename) => {
               var arr = dataurl.split(','),
                   mime = arr[0].match(/:(.*?);/)[1],
                   bstr = atob(arr[1]),
                   n = bstr.length,
                   u8arr = new Uint8Array(n);
               while (n--) {
                   u8arr[n] = bstr.charCodeAt(n);
               }
               return new File([u8arr], filename, { type: mime });
           }
})