//our-domain/news

import { Fragment } from "react";
import Link from 'next/link'

export default function NewsPage() {
    return <Fragment>
        <h1>The news page</h1>
        <ul>
            <li><Link href="news/nextjs-is-a-great-framework">Great framework</Link></li>
        </ul>
    </Fragment>
}