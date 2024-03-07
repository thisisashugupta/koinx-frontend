import Image from 'next/image'

function CoinInfo({coin} : {coin?: string}) {
  return (
    <>
      <Image className="rounded-full w-9" src="/bitcoin.png" alt="Bitcoin" width={100} height={100} />
      <div className="text-2xl"><p>Bitcoin</p></div>
      <div className="text-sm text-gray-500"><p>BTC</p></div>
      <div className="mx-4 text-white font-medium bg-slate-500/90 px-2 py-1 rounded  md:px-[10px] md:py-[6px] md:rounded-lg"><p>Rank #1</p></div>
    </>
  )
}

export default CoinInfo
