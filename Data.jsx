function COVID(props) {
  return (
    <div className="coronadata">
      <div className="keyword">
        <span className="tag"><div>{props.field}</div> <div>{props.word}</div> <div>{props.service}</div></span>
      </div>
      <span className="name">{props.name}</span>
      <span className="company">by {props.company}</span>
      <span className="details">詳細:{props.details}</span>
      <span className="offer">提供期間:{props.start} ～ {props.end}</span>
      <span className="period_remarks">期間備考:{props.period_remarks}</span>
      <span className="field">URL:<a href={props.URL}>{props.URL}</a></span>
      <span className="announcement">発表:{props.announcement}</span>
      {/*
        <span className="field">分野:{props.field}</span>
        <span className="service">サービス分野:{props.service}</span>

        <span className="price">無料/有料:{props.price}</span>
        <span className="target">対象者:{props.target}</span>
        <span className="source">情報源:{props.source}</span>
        <span className="support">導入支援有無:{props.support}</span> //2020.3時点で使われていない
      */}
    </div>
  );
}
