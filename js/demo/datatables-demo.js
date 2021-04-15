
var table = $('#table1').DataTable ( {
} );
const config = {
  apiKey: "AIzaSyCrKNxW3S-00z3GcRCXE232WgTGaNBbPIk",
  authDomain: "travel-grant-form.firebaseapp.com",
  databaseURL: "https://travel-grant-form.firebaseio.com",
  projectId: "travel-grant-form",
  storageBucket: "travel-grant-form.appspot.com",
  messagingSenderId: "87343215766",
  appId: "1:87343215766:web:5922a651a0b85066013eb7",
  measurementId: "G-R1CEXQE07J"
};

firebase.initializeApp(config);

firebase.database().ref('travel-grant-form').on('value', ts_measures => {
console.log("check2");
    ts_measures.forEach(ts_measure => {
console.log(ts_measure);
      var dataSet = [ts_measure.val().date,ts_measure.val().applicantname, ts_measure.val().idno, ts_measure.val().email, ts_measure.val().mobno, ts_measure.val().supervisorname, ts_measure.val().department, ts_measure.val().purposeofvisit, ts_measure.val().paperaccepted, ts_measure.val().title, ts_measure.val().conferencetype, ts_measure.val().venue, ts_measure.val().dateevent, ts_measure.val().organized, ts_measure.val().bustaxi, ts_measure.val().railairfare, ts_measure.val().allowance, ts_measure.val().fee, ts_measure.val().currentfinancial, ts_measure.val().details, ts_measure.val().acceptance, ts_measure.val().copy, ts_measure.val().brochure];//changes here
      table.rows.add([dataSet]).draw();
    });
  });
