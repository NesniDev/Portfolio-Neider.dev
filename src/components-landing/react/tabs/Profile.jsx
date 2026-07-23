import { Highlight, themes } from 'prism-react-renderer'

export function Profile({ codigoString, info }) {
  return (
    <div className="w-full ">
      <Highlight
        theme={themes.vsDark}
        code={codigoString}
        language={info.lenguaje}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} font-jetbrains w-full text-xs sm:text-sm`}
            style={{
              ...style,
              backgroundColor: 'transparent',
              padding: 0,
              fontSize: 'inherit'
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, className: 'flex' })}>
                <span
                  className="w-8 sm:w-12 shrink-0 text-right pr-2 sm:pr-4 select-none text-gray-500"
                >
                  {i + 1}
                </span>

                <span className="flex-1 whitespace-pre-wrap">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default Profile;
