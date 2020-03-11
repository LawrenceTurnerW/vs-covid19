function COVID(props) {
  return (
    <div className="coronadata">
      <span className="name">{props.name}</span>
      <div style={{float:'right'}}>
        <span className="company">企業等:{props.company}</span>
        <span className="source">情報源:{props.source}</span>
      </div>
      <span className="field">分野:{props.field}</span>
      <span className="service">サービス分野:{props.service}</span>
      <span className="word">キーワード:{props.word}</span>
      <span className="target">対象者:{props.target}</span>
      <span className="start">開始日:{props.start}</span>
      <span className="end">終了日:{props.end}</span>
      <span className="period_remarks">期間備考:{props.period_remarks}</span>
      {/*<span className="price">無料/有料:{props.price}</span>*/}
      <span className="support">導入支援有無:{props.support}</span>
      <span className="details">詳細:{props.details}</span>
      <span className="announcement">発表日付:{props.announcement}</span>
      <span className="field">URL:<a href={props.URL}>{props.URL}</a></span>
    </div>
  );
}
