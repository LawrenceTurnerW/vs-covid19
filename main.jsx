var coronadata;
const FIELDDATA = ["教育、学習支援","生活関連サービス、娯楽","宿泊、飲食サービス"]
const DATA_URL = 'https://app.sabae.cc/api/googlespreadsheet.json?key=2PACX-1vSFMNp5HcRNOF5MrAujEUWR1dIoX2mncMEWTbPlVAaJqKWiq831-6gnCyI7n_G8YfPqNQXrfwyVjyHL';

fetch(DATA_URL)
  .then((response) => response.json())
  .then((jsonData) => {
    function App() {
      coronadata = jsonData.filter(function(item,ndex){
        return FIELDDATA.indexOf(item.分野)>=0 && item.対象者.indexOf("個人")>=0;
      });
      return(
        <div>
        <Timeline coronadata={coronadata}/>
        </div>
      );
    }
    const target = document.querySelector('#app');
    ReactDOM.render(<App/>, target);
  });
